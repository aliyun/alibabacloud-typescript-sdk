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
exports.DescribeAppInstancesResponseBody = exports.DescribeAppInstancesResponseBodyInstances = exports.DescribeAppInstancesResponseBodyInstancesComponents = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAppInstancesResponseBodyInstancesComponents extends $dara.Model {
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
exports.DescribeAppInstancesResponseBodyInstancesComponents = DescribeAppInstancesResponseBodyInstancesComponents;
class DescribeAppInstancesResponseBodyInstances extends $dara.Model {
    static names() {
        return {
            appName: 'AppName',
            appType: 'AppType',
            components: 'Components',
            DBInstanceName: 'DBInstanceName',
            instanceClass: 'InstanceClass',
            instanceMinorVersion: 'InstanceMinorVersion',
            instanceName: 'InstanceName',
            publicConnectionString: 'PublicConnectionString',
            regionId: 'RegionId',
            status: 'Status',
            vSwitchId: 'VSwitchId',
            vpcConnectionString: 'VpcConnectionString',
        };
    }
    static types() {
        return {
            appName: 'string',
            appType: 'string',
            components: { 'type': 'array', 'itemType': DescribeAppInstancesResponseBodyInstancesComponents },
            DBInstanceName: 'string',
            instanceClass: 'string',
            instanceMinorVersion: 'string',
            instanceName: 'string',
            publicConnectionString: 'string',
            regionId: 'string',
            status: 'string',
            vSwitchId: 'string',
            vpcConnectionString: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.components)) {
            $dara.Model.validateArray(this.components);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAppInstancesResponseBodyInstances = DescribeAppInstancesResponseBodyInstances;
class DescribeAppInstancesResponseBody extends $dara.Model {
    static names() {
        return {
            instances: 'Instances',
            maxResults: 'MaxResults',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            instances: { 'type': 'array', 'itemType': DescribeAppInstancesResponseBodyInstances },
            maxResults: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.instances)) {
            $dara.Model.validateArray(this.instances);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAppInstancesResponseBody = DescribeAppInstancesResponseBody;
//# sourceMappingURL=DescribeAppInstancesResponseBody.js.map