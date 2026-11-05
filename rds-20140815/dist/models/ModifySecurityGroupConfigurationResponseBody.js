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
exports.ModifySecurityGroupConfigurationResponseBody = exports.ModifySecurityGroupConfigurationResponseBodyItems = exports.ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation extends $dara.Model {
    static names() {
        return {
            networkType: 'NetworkType',
            regionId: 'RegionId',
            securityGroupId: 'SecurityGroupId',
        };
    }
    static types() {
        return {
            networkType: 'string',
            regionId: 'string',
            securityGroupId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation = ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation;
class ModifySecurityGroupConfigurationResponseBodyItems extends $dara.Model {
    static names() {
        return {
            ecsSecurityGroupRelation: 'EcsSecurityGroupRelation',
        };
    }
    static types() {
        return {
            ecsSecurityGroupRelation: { 'type': 'array', 'itemType': ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation },
        };
    }
    validate() {
        if (Array.isArray(this.ecsSecurityGroupRelation)) {
            $dara.Model.validateArray(this.ecsSecurityGroupRelation);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifySecurityGroupConfigurationResponseBodyItems = ModifySecurityGroupConfigurationResponseBodyItems;
class ModifySecurityGroupConfigurationResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceName: 'DBInstanceName',
            items: 'Items',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            DBInstanceName: 'string',
            items: ModifySecurityGroupConfigurationResponseBodyItems,
            requestId: 'string',
        };
    }
    validate() {
        if (this.items && typeof this.items.validate === 'function') {
            this.items.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifySecurityGroupConfigurationResponseBody = ModifySecurityGroupConfigurationResponseBody;
//# sourceMappingURL=ModifySecurityGroupConfigurationResponseBody.js.map