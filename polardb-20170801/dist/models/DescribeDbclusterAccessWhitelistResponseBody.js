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
exports.DescribeDBClusterAccessWhitelistResponseBody = exports.DescribeDBClusterAccessWhitelistResponseBodyProjectItems = exports.DescribeDBClusterAccessWhitelistResponseBodyProjectItemsDBClusterProjectIPArray = exports.DescribeDBClusterAccessWhitelistResponseBodyItems = exports.DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray = exports.DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups = exports.DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup extends $dara.Model {
    static names() {
        return {
            securityGroupId: 'SecurityGroupId',
            securityGroupName: 'SecurityGroupName',
        };
    }
    static types() {
        return {
            securityGroupId: 'string',
            securityGroupName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup = DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup;
class DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups extends $dara.Model {
    static names() {
        return {
            DBClusterSecurityGroup: 'DBClusterSecurityGroup',
        };
    }
    static types() {
        return {
            DBClusterSecurityGroup: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup },
        };
    }
    validate() {
        if (Array.isArray(this.DBClusterSecurityGroup)) {
            $dara.Model.validateArray(this.DBClusterSecurityGroup);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups = DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups;
class DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray extends $dara.Model {
    static names() {
        return {
            DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
            DBClusterIPArrayName: 'DBClusterIPArrayName',
            securityIps: 'SecurityIps',
        };
    }
    static types() {
        return {
            DBClusterIPArrayAttribute: 'string',
            DBClusterIPArrayName: 'string',
            securityIps: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray = DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray;
class DescribeDBClusterAccessWhitelistResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBClusterIPArray: 'DBClusterIPArray',
        };
    }
    static types() {
        return {
            DBClusterIPArray: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray },
        };
    }
    validate() {
        if (Array.isArray(this.DBClusterIPArray)) {
            $dara.Model.validateArray(this.DBClusterIPArray);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAccessWhitelistResponseBodyItems = DescribeDBClusterAccessWhitelistResponseBodyItems;
class DescribeDBClusterAccessWhitelistResponseBodyProjectItemsDBClusterProjectIPArray extends $dara.Model {
    static names() {
        return {
            defaultOpen: 'DefaultOpen',
            projectId: 'ProjectId',
            revision: 'Revision',
            securityIps: 'SecurityIps',
        };
    }
    static types() {
        return {
            defaultOpen: 'boolean',
            projectId: 'string',
            revision: 'number',
            securityIps: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAccessWhitelistResponseBodyProjectItemsDBClusterProjectIPArray = DescribeDBClusterAccessWhitelistResponseBodyProjectItemsDBClusterProjectIPArray;
class DescribeDBClusterAccessWhitelistResponseBodyProjectItems extends $dara.Model {
    static names() {
        return {
            DBClusterProjectIPArray: 'DBClusterProjectIPArray',
        };
    }
    static types() {
        return {
            DBClusterProjectIPArray: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhitelistResponseBodyProjectItemsDBClusterProjectIPArray },
        };
    }
    validate() {
        if (Array.isArray(this.DBClusterProjectIPArray)) {
            $dara.Model.validateArray(this.DBClusterProjectIPArray);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAccessWhitelistResponseBodyProjectItems = DescribeDBClusterAccessWhitelistResponseBodyProjectItems;
class DescribeDBClusterAccessWhitelistResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterSecurityGroups: 'DBClusterSecurityGroups',
            items: 'Items',
            projectItems: 'ProjectItems',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            DBClusterSecurityGroups: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups,
            items: DescribeDBClusterAccessWhitelistResponseBodyItems,
            projectItems: DescribeDBClusterAccessWhitelistResponseBodyProjectItems,
            requestId: 'string',
        };
    }
    validate() {
        if (this.DBClusterSecurityGroups && typeof this.DBClusterSecurityGroups.validate === 'function') {
            this.DBClusterSecurityGroups.validate();
        }
        if (this.items && typeof this.items.validate === 'function') {
            this.items.validate();
        }
        if (this.projectItems && typeof this.projectItems.validate === 'function') {
            this.projectItems.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAccessWhitelistResponseBody = DescribeDBClusterAccessWhitelistResponseBody;
//# sourceMappingURL=DescribeDbclusterAccessWhitelistResponseBody.js.map