// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes extends $dara.Model {
  cpuCores?: string;
  nodeId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      nodeId: 'nodeId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'string',
      nodeId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBodyDBProxyNodes extends $dara.Model {
  DBProxyNodes?: DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes[];
  static names(): { [key: string]: string } {
    return {
      DBProxyNodes: 'DBProxyNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyNodes: { 'type': 'array', 'itemType': DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes },
    };
  }

  validate() {
    if(Array.isArray(this.DBProxyNodes)) {
      $dara.Model.validateArray(this.DBProxyNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems extends $dara.Model {
  dbProxyEndpointConnectString?: string;
  dbProxyEndpointNetType?: string;
  dbProxyEndpointPort?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointConnectString: 'DbProxyEndpointConnectString',
      dbProxyEndpointNetType: 'DbProxyEndpointNetType',
      dbProxyEndpointPort: 'DbProxyEndpointPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointConnectString: 'string',
      dbProxyEndpointNetType: 'string',
      dbProxyEndpointPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBodyEndpointConnectItems extends $dara.Model {
  endpointConnectItems?: DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems[];
  static names(): { [key: string]: string } {
    return {
      endpointConnectItems: 'EndpointConnectItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointConnectItems: { 'type': 'array', 'itemType': DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems },
    };
  }

  validate() {
    if(Array.isArray(this.endpointConnectItems)) {
      $dara.Model.validateArray(this.endpointConnectItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBody extends $dara.Model {
  causalConsistReadTimeout?: string;
  DBProxyConnectString?: string;
  DBProxyConnectStringNetType?: string;
  DBProxyConnectStringPort?: string;
  DBProxyEndpointId?: string;
  DBProxyEndpointMinSlaveCount?: string;
  DBProxyEngineType?: string;
  DBProxyFeatures?: string;
  DBProxyNodes?: DescribeDBProxyEndpointResponseBodyDBProxyNodes;
  dbProxyEndpointAliases?: string;
  dbProxyEndpointReadWriteMode?: string;
  dbProxyEndpointVpcId?: string;
  dbProxyEndpointVswitchId?: string;
  dbProxyEndpointZoneId?: string;
  endpointConnectItems?: DescribeDBProxyEndpointResponseBodyEndpointConnectItems;
  readOnlyInstanceDistributionType?: string;
  readOnlyInstanceMaxDelayTime?: string;
  readOnlyInstanceWeight?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      causalConsistReadTimeout: 'CausalConsistReadTimeout',
      DBProxyConnectString: 'DBProxyConnectString',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      DBProxyConnectStringPort: 'DBProxyConnectStringPort',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEndpointMinSlaveCount: 'DBProxyEndpointMinSlaveCount',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyFeatures: 'DBProxyFeatures',
      DBProxyNodes: 'DBProxyNodes',
      dbProxyEndpointAliases: 'DbProxyEndpointAliases',
      dbProxyEndpointReadWriteMode: 'DbProxyEndpointReadWriteMode',
      dbProxyEndpointVpcId: 'DbProxyEndpointVpcId',
      dbProxyEndpointVswitchId: 'DbProxyEndpointVswitchId',
      dbProxyEndpointZoneId: 'DbProxyEndpointZoneId',
      endpointConnectItems: 'EndpointConnectItems',
      readOnlyInstanceDistributionType: 'ReadOnlyInstanceDistributionType',
      readOnlyInstanceMaxDelayTime: 'ReadOnlyInstanceMaxDelayTime',
      readOnlyInstanceWeight: 'ReadOnlyInstanceWeight',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      causalConsistReadTimeout: 'string',
      DBProxyConnectString: 'string',
      DBProxyConnectStringNetType: 'string',
      DBProxyConnectStringPort: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEndpointMinSlaveCount: 'string',
      DBProxyEngineType: 'string',
      DBProxyFeatures: 'string',
      DBProxyNodes: DescribeDBProxyEndpointResponseBodyDBProxyNodes,
      dbProxyEndpointAliases: 'string',
      dbProxyEndpointReadWriteMode: 'string',
      dbProxyEndpointVpcId: 'string',
      dbProxyEndpointVswitchId: 'string',
      dbProxyEndpointZoneId: 'string',
      endpointConnectItems: DescribeDBProxyEndpointResponseBodyEndpointConnectItems,
      readOnlyInstanceDistributionType: 'string',
      readOnlyInstanceMaxDelayTime: 'string',
      readOnlyInstanceWeight: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBProxyNodes && typeof (this.DBProxyNodes as any).validate === 'function') {
      (this.DBProxyNodes as any).validate();
    }
    if(this.endpointConnectItems && typeof (this.endpointConnectItems as any).validate === 'function') {
      (this.endpointConnectItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

