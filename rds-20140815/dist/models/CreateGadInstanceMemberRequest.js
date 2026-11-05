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
exports.CreateGadInstanceMemberRequest = exports.CreateGadInstanceMemberRequestUnitNode = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateGadInstanceMemberRequestUnitNode extends $dara.Model {
    static names() {
        return {
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceStorage: 'DBInstanceStorage',
            DBInstanceStorageType: 'DBInstanceStorageType',
            dbInstanceClass: 'DbInstanceClass',
            dtsConflict: 'DtsConflict',
            dtsInstanceClass: 'DtsInstanceClass',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            regionID: 'RegionID',
            securityIPList: 'SecurityIPList',
            vSwitchID: 'VSwitchID',
            vpcID: 'VpcID',
            zoneID: 'ZoneID',
            zoneIDSlave1: 'ZoneIDSlave1',
            zoneIDSlave2: 'ZoneIDSlave2',
        };
    }
    static types() {
        return {
            DBInstanceDescription: 'string',
            DBInstanceStorage: 'number',
            DBInstanceStorageType: 'string',
            dbInstanceClass: 'string',
            dtsConflict: 'string',
            dtsInstanceClass: 'string',
            engine: 'string',
            engineVersion: 'string',
            regionID: 'string',
            securityIPList: 'string',
            vSwitchID: 'string',
            vpcID: 'string',
            zoneID: 'string',
            zoneIDSlave1: 'string',
            zoneIDSlave2: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateGadInstanceMemberRequestUnitNode = CreateGadInstanceMemberRequestUnitNode;
class CreateGadInstanceMemberRequest extends $dara.Model {
    static names() {
        return {
            centralDBInstanceId: 'CentralDBInstanceId',
            centralRdsDtsAdminAccount: 'CentralRdsDtsAdminAccount',
            centralRdsDtsAdminPassword: 'CentralRdsDtsAdminPassword',
            centralRegionId: 'CentralRegionId',
            DBList: 'DBList',
            gadInstanceId: 'GadInstanceId',
            unitNode: 'UnitNode',
        };
    }
    static types() {
        return {
            centralDBInstanceId: 'string',
            centralRdsDtsAdminAccount: 'string',
            centralRdsDtsAdminPassword: 'string',
            centralRegionId: 'string',
            DBList: 'string',
            gadInstanceId: 'string',
            unitNode: { 'type': 'array', 'itemType': CreateGadInstanceMemberRequestUnitNode },
        };
    }
    validate() {
        if (Array.isArray(this.unitNode)) {
            $dara.Model.validateArray(this.unitNode);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateGadInstanceMemberRequest = CreateGadInstanceMemberRequest;
//# sourceMappingURL=CreateGadInstanceMemberRequest.js.map