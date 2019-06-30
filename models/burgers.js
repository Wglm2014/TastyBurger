module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {

        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }

    });

    Burger.associate = function (models) {
        Burger.belongsTo(models.Customer, {
            foreignKey: { allowNull: true }
        });
    }

    return Burger;
}