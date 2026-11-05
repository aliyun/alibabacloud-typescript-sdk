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
exports.DescribeGlobalDataNetworkListResponseBody = exports.DescribeGlobalDataNetworkListResponseBodyItems = exports.DescribeGlobalDataNetworkListResponseBodyItemsNetworks = exports.DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology = exports.DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources = exports.DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations = exports.DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels extends $dara.Model {
    static names() {
        return {
            channelId: 'ChannelId',
            channelStatus: 'ChannelStatus',
            freezeSourceDuringSync: 'FreezeSourceDuringSync',
            progress: 'Progress',
        };
    }
    static types() {
        return {
            channelId: 'string',
            channelStatus: 'string',
            freezeSourceDuringSync: 'boolean',
            progress: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels = DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels;
class DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations extends $dara.Model {
    static names() {
        return {
            destinationFileSystemPath: 'DestinationFileSystemPath',
            destinationId: 'DestinationId',
            destinationRegion: 'DestinationRegion',
            destinationType: 'DestinationType',
        };
    }
    static types() {
        return {
            destinationFileSystemPath: 'string',
            destinationId: 'string',
            destinationRegion: 'string',
            destinationType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations = DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations;
class DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources extends $dara.Model {
    static names() {
        return {
            sourceFileSystemPath: 'SourceFileSystemPath',
            sourceId: 'SourceId',
            sourceRegion: 'SourceRegion',
            sourceType: 'SourceType',
        };
    }
    static types() {
        return {
            sourceFileSystemPath: 'string',
            sourceId: 'string',
            sourceRegion: 'string',
            sourceType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources = DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources;
class DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology extends $dara.Model {
    static names() {
        return {
            destinations: 'Destinations',
            sources: 'Sources',
        };
    }
    static types() {
        return {
            destinations: { 'type': 'array', 'itemType': DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations },
            sources: { 'type': 'array', 'itemType': DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources },
        };
    }
    validate() {
        if (Array.isArray(this.destinations)) {
            $dara.Model.validateArray(this.destinations);
        }
        if (Array.isArray(this.sources)) {
            $dara.Model.validateArray(this.sources);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology = DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology;
class DescribeGlobalDataNetworkListResponseBodyItemsNetworks extends $dara.Model {
    static names() {
        return {
            channels: 'Channels',
            createTime: 'CreateTime',
            networkDescription: 'NetworkDescription',
            networkId: 'NetworkId',
            networkStatus: 'NetworkStatus',
            networkTopology: 'NetworkTopology',
        };
    }
    static types() {
        return {
            channels: { 'type': 'array', 'itemType': DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels },
            createTime: 'string',
            networkDescription: 'string',
            networkId: 'string',
            networkStatus: 'string',
            networkTopology: DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology,
        };
    }
    validate() {
        if (Array.isArray(this.channels)) {
            $dara.Model.validateArray(this.channels);
        }
        if (this.networkTopology && typeof this.networkTopology.validate === 'function') {
            this.networkTopology.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDataNetworkListResponseBodyItemsNetworks = DescribeGlobalDataNetworkListResponseBodyItemsNetworks;
class DescribeGlobalDataNetworkListResponseBodyItems extends $dara.Model {
    static names() {
        return {
            networks: 'Networks',
        };
    }
    static types() {
        return {
            networks: { 'type': 'array', 'itemType': DescribeGlobalDataNetworkListResponseBodyItemsNetworks },
        };
    }
    validate() {
        if (Array.isArray(this.networks)) {
            $dara.Model.validateArray(this.networks);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDataNetworkListResponseBodyItems = DescribeGlobalDataNetworkListResponseBodyItems;
class DescribeGlobalDataNetworkListResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeGlobalDataNetworkListResponseBodyItems,
            pageNumber: 'string',
            pageRecordCount: 'string',
            requestId: 'string',
            totalRecordCount: 'string',
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
exports.DescribeGlobalDataNetworkListResponseBody = DescribeGlobalDataNetworkListResponseBody;
//# sourceMappingURL=DescribeGlobalDataNetworkListResponseBody.js.map