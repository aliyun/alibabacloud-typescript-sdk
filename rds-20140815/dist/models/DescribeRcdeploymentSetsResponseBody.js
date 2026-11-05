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
exports.DescribeRCDeploymentSetsResponseBody = exports.DescribeRCDeploymentSetsResponseBodyDeploymentSets = exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet = exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags = exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTagsTag = exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds = exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities = exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity extends $dara.Model {
    static names() {
        return {
            availableAmount: 'AvailableAmount',
            usedAmount: 'UsedAmount',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            availableAmount: 'number',
            usedAmount: 'number',
            zoneId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity = DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity;
class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities extends $dara.Model {
    static names() {
        return {
            capacity: 'Capacity',
        };
    }
    static types() {
        return {
            capacity: { 'type': 'array', 'itemType': DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity },
        };
    }
    validate() {
        if (Array.isArray(this.capacity)) {
            $dara.Model.validateArray(this.capacity);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities = DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities;
class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds extends $dara.Model {
    static names() {
        return {
            instanceId: 'InstanceId',
        };
    }
    static types() {
        return {
            instanceId: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.instanceId)) {
            $dara.Model.validateArray(this.instanceId);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds = DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds;
class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTagsTag extends $dara.Model {
    static names() {
        return {
            resourceId: 'ResourceId',
            resourceType: 'ResourceType',
            tagKey: 'TagKey',
            tagValue: 'TagValue',
        };
    }
    static types() {
        return {
            resourceId: 'string',
            resourceType: 'string',
            tagKey: 'string',
            tagValue: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTagsTag = DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTagsTag;
class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags extends $dara.Model {
    static names() {
        return {
            tag: 'Tag',
        };
    }
    static types() {
        return {
            tag: { 'type': 'array', 'itemType': DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTagsTag },
        };
    }
    validate() {
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags = DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags;
class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet extends $dara.Model {
    static names() {
        return {
            accountId: 'AccountId',
            capacities: 'Capacities',
            createTime: 'CreateTime',
            deploymentSetDescription: 'DeploymentSetDescription',
            deploymentSetId: 'DeploymentSetId',
            deploymentSetName: 'DeploymentSetName',
            deploymentStrategy: 'DeploymentStrategy',
            domain: 'Domain',
            granularity: 'Granularity',
            groupCount: 'GroupCount',
            instanceAmount: 'InstanceAmount',
            instanceIds: 'InstanceIds',
            strategy: 'Strategy',
            tags: 'Tags',
        };
    }
    static types() {
        return {
            accountId: 'string',
            capacities: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities,
            createTime: 'string',
            deploymentSetDescription: 'string',
            deploymentSetId: 'string',
            deploymentSetName: 'string',
            deploymentStrategy: 'string',
            domain: 'string',
            granularity: 'string',
            groupCount: 'number',
            instanceAmount: 'number',
            instanceIds: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds,
            strategy: 'string',
            tags: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags,
        };
    }
    validate() {
        if (this.capacities && typeof this.capacities.validate === 'function') {
            this.capacities.validate();
        }
        if (this.instanceIds && typeof this.instanceIds.validate === 'function') {
            this.instanceIds.validate();
        }
        if (this.tags && typeof this.tags.validate === 'function') {
            this.tags.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet = DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet;
class DescribeRCDeploymentSetsResponseBodyDeploymentSets extends $dara.Model {
    static names() {
        return {
            deploymentSet: 'DeploymentSet',
        };
    }
    static types() {
        return {
            deploymentSet: { 'type': 'array', 'itemType': DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet },
        };
    }
    validate() {
        if (Array.isArray(this.deploymentSet)) {
            $dara.Model.validateArray(this.deploymentSet);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCDeploymentSetsResponseBodyDeploymentSets = DescribeRCDeploymentSetsResponseBodyDeploymentSets;
class DescribeRCDeploymentSetsResponseBody extends $dara.Model {
    static names() {
        return {
            deploymentSets: 'DeploymentSets',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            regionId: 'RegionId',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            deploymentSets: DescribeRCDeploymentSetsResponseBodyDeploymentSets,
            pageNumber: 'number',
            pageSize: 'number',
            regionId: 'string',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (this.deploymentSets && typeof this.deploymentSets.validate === 'function') {
            this.deploymentSets.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCDeploymentSetsResponseBody = DescribeRCDeploymentSetsResponseBody;
//# sourceMappingURL=DescribeRcdeploymentSetsResponseBody.js.map