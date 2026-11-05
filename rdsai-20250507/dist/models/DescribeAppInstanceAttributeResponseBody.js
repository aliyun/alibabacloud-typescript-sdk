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
exports.DescribeAppInstanceAttributeResponseBody = exports.DescribeAppInstanceAttributeResponseBodyUploadKeyList = exports.DescribeAppInstanceAttributeResponseBodyComponents = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAppInstanceAttributeResponseBodyComponents extends $dara.Model {
    static names() {
        return {
            status: 'Status',
            type: 'Type',
        };
    }
    static types() {
        return {
            status: 'string',
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
exports.DescribeAppInstanceAttributeResponseBodyComponents = DescribeAppInstanceAttributeResponseBodyComponents;
class DescribeAppInstanceAttributeResponseBodyUploadKeyList extends $dara.Model {
    static names() {
        return {
            isSystemKey: 'IsSystemKey',
            remark: 'Remark',
            slsStorageBytes: 'SlsStorageBytes',
            status: 'Status',
            uploadKey: 'UploadKey',
        };
    }
    static types() {
        return {
            isSystemKey: 'boolean',
            remark: 'string',
            slsStorageBytes: 'number',
            status: 'string',
            uploadKey: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAppInstanceAttributeResponseBodyUploadKeyList = DescribeAppInstanceAttributeResponseBodyUploadKeyList;
class DescribeAppInstanceAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            appName: 'AppName',
            appType: 'AppType',
            branchName: 'BranchName',
            branchingEnabled: 'BranchingEnabled',
            components: 'Components',
            DBInstanceName: 'DBInstanceName',
            eipId: 'EipId',
            eipStatus: 'EipStatus',
            instanceClass: 'InstanceClass',
            instanceLatestVersion: 'InstanceLatestVersion',
            instanceMinorVersion: 'InstanceMinorVersion',
            instanceName: 'InstanceName',
            loginToken: 'LoginToken',
            minorVersionDetail: 'MinorVersionDetail',
            minorVersionReleaseNotes: 'MinorVersionReleaseNotes',
            natCreatedBy: 'NatCreatedBy',
            natGatewayId: 'NatGatewayId',
            natStatus: 'NatStatus',
            publicConnectionString: 'PublicConnectionString',
            regionId: 'RegionId',
            requestId: 'RequestId',
            retentionHours: 'RetentionHours',
            sqlExtendMoInstanceId: 'SqlExtendMoInstanceId',
            status: 'Status',
            uploadKey: 'UploadKey',
            uploadKeyList: 'UploadKeyList',
            vSwitchId: 'VSwitchId',
            vpcConnectionString: 'VpcConnectionString',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            appName: 'string',
            appType: 'string',
            branchName: 'string',
            branchingEnabled: 'string',
            components: { 'type': 'array', 'itemType': DescribeAppInstanceAttributeResponseBodyComponents },
            DBInstanceName: 'string',
            eipId: 'string',
            eipStatus: 'string',
            instanceClass: 'string',
            instanceLatestVersion: 'string',
            instanceMinorVersion: 'string',
            instanceName: 'string',
            loginToken: 'string',
            minorVersionDetail: 'string',
            minorVersionReleaseNotes: 'string',
            natCreatedBy: 'string',
            natGatewayId: 'string',
            natStatus: 'string',
            publicConnectionString: 'string',
            regionId: 'string',
            requestId: 'string',
            retentionHours: 'string',
            sqlExtendMoInstanceId: 'string',
            status: 'string',
            uploadKey: 'string',
            uploadKeyList: { 'type': 'array', 'itemType': DescribeAppInstanceAttributeResponseBodyUploadKeyList },
            vSwitchId: 'string',
            vpcConnectionString: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.components)) {
            $dara.Model.validateArray(this.components);
        }
        if (Array.isArray(this.uploadKeyList)) {
            $dara.Model.validateArray(this.uploadKeyList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAppInstanceAttributeResponseBody = DescribeAppInstanceAttributeResponseBody;
//# sourceMappingURL=DescribeAppInstanceAttributeResponseBody.js.map