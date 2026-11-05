"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeDeliveryAddressResponseBody = exports.DescribeDeliveryAddressResponseBodyAddresses = exports.DescribeDeliveryAddressResponseBodyAddressesTown = exports.DescribeDeliveryAddressResponseBodyAddressesProvince = exports.DescribeDeliveryAddressResponseBodyAddressesCity = exports.DescribeDeliveryAddressResponseBodyAddressesArea = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDeliveryAddressResponseBodyAddressesArea extends $dara.Model {
    static names() {
        return {
            areaId: 'AreaId',
            areaName: 'AreaName',
        };
    }
    static types() {
        return {
            areaId: 'number',
            areaName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDeliveryAddressResponseBodyAddressesArea = DescribeDeliveryAddressResponseBodyAddressesArea;
class DescribeDeliveryAddressResponseBodyAddressesCity extends $dara.Model {
    static names() {
        return {
            cityId: 'CityId',
            cityName: 'CityName',
        };
    }
    static types() {
        return {
            cityId: 'number',
            cityName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDeliveryAddressResponseBodyAddressesCity = DescribeDeliveryAddressResponseBodyAddressesCity;
class DescribeDeliveryAddressResponseBodyAddressesProvince extends $dara.Model {
    static names() {
        return {
            provinceId: 'ProvinceId',
            provinceName: 'ProvinceName',
        };
    }
    static types() {
        return {
            provinceId: 'number',
            provinceName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDeliveryAddressResponseBodyAddressesProvince = DescribeDeliveryAddressResponseBodyAddressesProvince;
class DescribeDeliveryAddressResponseBodyAddressesTown extends $dara.Model {
    static names() {
        return {
            townId: 'TownId',
            townName: 'TownName',
        };
    }
    static types() {
        return {
            townId: 'number',
            townName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDeliveryAddressResponseBodyAddressesTown = DescribeDeliveryAddressResponseBodyAddressesTown;
class DescribeDeliveryAddressResponseBodyAddresses extends $dara.Model {
    static names() {
        return {
            area: 'Area',
            city: 'City',
            contacts: 'Contacts',
            defaultAddress: 'DefaultAddress',
            detail: 'Detail',
            mobile: 'Mobile',
            postalCode: 'PostalCode',
            province: 'Province',
            town: 'Town',
        };
    }
    static types() {
        return {
            area: DescribeDeliveryAddressResponseBodyAddressesArea,
            city: DescribeDeliveryAddressResponseBodyAddressesCity,
            contacts: 'string',
            defaultAddress: 'boolean',
            detail: 'string',
            mobile: 'string',
            postalCode: 'string',
            province: DescribeDeliveryAddressResponseBodyAddressesProvince,
            town: DescribeDeliveryAddressResponseBodyAddressesTown,
        };
    }
    validate() {
        if (this.area && typeof this.area.validate === 'function') {
            this.area.validate();
        }
        if (this.city && typeof this.city.validate === 'function') {
            this.city.validate();
        }
        if (this.province && typeof this.province.validate === 'function') {
            this.province.validate();
        }
        if (this.town && typeof this.town.validate === 'function') {
            this.town.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDeliveryAddressResponseBodyAddresses = DescribeDeliveryAddressResponseBodyAddresses;
class DescribeDeliveryAddressResponseBody extends $dara.Model {
    static names() {
        return {
            addresses: 'Addresses',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            addresses: { 'type': 'array', 'itemType': DescribeDeliveryAddressResponseBodyAddresses },
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.addresses)) {
            $dara.Model.validateArray(this.addresses);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDeliveryAddressResponseBody = DescribeDeliveryAddressResponseBody;
//# sourceMappingURL=DescribeDeliveryAddressResponseBody.js.map