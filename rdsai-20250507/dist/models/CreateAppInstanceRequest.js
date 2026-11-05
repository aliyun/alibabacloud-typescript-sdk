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
exports.CreateAppInstanceRequest = exports.CreateAppInstanceRequestDBInstanceConfig = exports.CreateAppInstanceRequestComponents = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateAppInstanceRequestComponents extends $dara.Model {
    static names() {
        return {
            type: 'Type',
        };
    }
    static types() {
        return {
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateAppInstanceRequestComponents = CreateAppInstanceRequestComponents;
class CreateAppInstanceRequestDBInstanceConfig extends $dara.Model {
    static names() {
        return {
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceStorage: 'DBInstanceStorage',
            payType: 'PayType',
        };
    }
    static types() {
        return {
            DBInstanceClass: 'string',
            DBInstanceStorage: 'number',
            payType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateAppInstanceRequestDBInstanceConfig = CreateAppInstanceRequestDBInstanceConfig;
class CreateAppInstanceRequest extends $dara.Model {
    static names() {
        return {
            appName: 'AppName',
            appType: 'AppType',
            clientToken: 'ClientToken',
            components: 'Components',
            DBInstanceConfig: 'DBInstanceConfig',
            DBInstanceName: 'DBInstanceName',
            dashboardPassword: 'DashboardPassword',
            dashboardUsername: 'DashboardUsername',
            database: 'Database',
            databasePassword: 'DatabasePassword',
            initializeWithExistingData: 'InitializeWithExistingData',
            instanceClass: 'InstanceClass',
            publicEndpointEnabled: 'PublicEndpointEnabled',
            publicNetworkAccessEnabled: 'PublicNetworkAccessEnabled',
            RAGEnabled: 'RAGEnabled',
            regionId: 'RegionId',
            vSwitchId: 'VSwitchId',
        };
    }
    static types() {
        return {
            appName: 'string',
            appType: 'string',
            clientToken: 'string',
            components: { 'type': 'array', 'itemType': CreateAppInstanceRequestComponents },
            DBInstanceConfig: CreateAppInstanceRequestDBInstanceConfig,
            DBInstanceName: 'string',
            dashboardPassword: 'string',
            dashboardUsername: 'string',
            database: 'string',
            databasePassword: 'string',
            initializeWithExistingData: 'boolean',
            instanceClass: 'string',
            publicEndpointEnabled: 'boolean',
            publicNetworkAccessEnabled: 'boolean',
            RAGEnabled: 'boolean',
            regionId: 'string',
            vSwitchId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.components)) {
            $dara.Model.validateArray(this.components);
        }
        if (this.DBInstanceConfig && typeof this.DBInstanceConfig.validate === 'function') {
            this.DBInstanceConfig.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateAppInstanceRequest = CreateAppInstanceRequest;
//# sourceMappingURL=CreateAppInstanceRequest.js.map