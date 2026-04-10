// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeMacsecKeysMacsecKey extends $dara.Model {
  cak?: string;
  cipherSuite?: string;
  ckn?: string;
  startOn?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cak: 'Cak',
      cipherSuite: 'CipherSuite',
      ckn: 'Ckn',
      startOn: 'StartOn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cak: 'string',
      cipherSuite: 'string',
      ckn: 'string',
      startOn: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeMacsecKeys extends $dara.Model {
  macsecKey?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeMacsecKeysMacsecKey[];
  static names(): { [key: string]: string } {
    return {
      macsecKey: 'MacsecKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      macsecKey: { 'type': 'array', 'itemType': DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeMacsecKeysMacsecKey },
    };
  }

  validate() {
    if(Array.isArray(this.macsecKey)) {
      $dara.Model.validateArray(this.macsecKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTagsTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTags extends $dara.Model {
  tags?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTagsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType extends $dara.Model {
  accessPointId?: string;
  accessPointType?: string;
  adDetailLocation?: string;
  adLocation?: string;
  bandwidth?: number;
  businessStatus?: string;
  chargeType?: string;
  circuitCode?: string;
  creationTime?: string;
  description?: string;
  enabledTime?: string;
  endTime?: string;
  expectSpec?: string;
  hasReservationData?: string;
  lineOperator?: string;
  loaStatus?: string;
  macsecKeys?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeMacsecKeys;
  name?: string;
  opticalModuleModel?: string;
  orderMode?: string;
  parentPhysicalConnectionAliUid?: number;
  parentPhysicalConnectionId?: string;
  peerLocation?: string;
  physicalConnectionId?: string;
  portNumber?: string;
  portType?: string;
  productType?: string;
  qosId?: string;
  redundantPhysicalConnectionId?: string;
  reservationActiveTime?: string;
  reservationInternetChargeType?: string;
  reservationOrderType?: string;
  resourceGroupId?: string;
  spec?: string;
  status?: string;
  tags?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTags;
  type?: string;
  virtualPhysicalConnectionCount?: number;
  vlanId?: string;
  vpconnStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      accessPointType: 'AccessPointType',
      adDetailLocation: 'AdDetailLocation',
      adLocation: 'AdLocation',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      circuitCode: 'CircuitCode',
      creationTime: 'CreationTime',
      description: 'Description',
      enabledTime: 'EnabledTime',
      endTime: 'EndTime',
      expectSpec: 'ExpectSpec',
      hasReservationData: 'HasReservationData',
      lineOperator: 'LineOperator',
      loaStatus: 'LoaStatus',
      macsecKeys: 'MacsecKeys',
      name: 'Name',
      opticalModuleModel: 'OpticalModuleModel',
      orderMode: 'OrderMode',
      parentPhysicalConnectionAliUid: 'ParentPhysicalConnectionAliUid',
      parentPhysicalConnectionId: 'ParentPhysicalConnectionId',
      peerLocation: 'PeerLocation',
      physicalConnectionId: 'PhysicalConnectionId',
      portNumber: 'PortNumber',
      portType: 'PortType',
      productType: 'ProductType',
      qosId: 'QosId',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      reservationActiveTime: 'ReservationActiveTime',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      reservationOrderType: 'ReservationOrderType',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      virtualPhysicalConnectionCount: 'VirtualPhysicalConnectionCount',
      vlanId: 'VlanId',
      vpconnStatus: 'VpconnStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      accessPointType: 'string',
      adDetailLocation: 'string',
      adLocation: 'string',
      bandwidth: 'number',
      businessStatus: 'string',
      chargeType: 'string',
      circuitCode: 'string',
      creationTime: 'string',
      description: 'string',
      enabledTime: 'string',
      endTime: 'string',
      expectSpec: 'string',
      hasReservationData: 'string',
      lineOperator: 'string',
      loaStatus: 'string',
      macsecKeys: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeMacsecKeys,
      name: 'string',
      opticalModuleModel: 'string',
      orderMode: 'string',
      parentPhysicalConnectionAliUid: 'number',
      parentPhysicalConnectionId: 'string',
      peerLocation: 'string',
      physicalConnectionId: 'string',
      portNumber: 'string',
      portType: 'string',
      productType: 'string',
      qosId: 'string',
      redundantPhysicalConnectionId: 'string',
      reservationActiveTime: 'string',
      reservationInternetChargeType: 'string',
      reservationOrderType: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tags: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTags,
      type: 'string',
      virtualPhysicalConnectionCount: 'number',
      vlanId: 'string',
      vpconnStatus: 'string',
    };
  }

  validate() {
    if(this.macsecKeys && typeof (this.macsecKeys as any).validate === 'function') {
      (this.macsecKeys as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet extends $dara.Model {
  physicalConnectionType?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType[];
  static names(): { [key: string]: string } {
    return {
      physicalConnectionType: 'PhysicalConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionType: { 'type': 'array', 'itemType': DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType },
    };
  }

  validate() {
    if(Array.isArray(this.physicalConnectionType)) {
      $dara.Model.validateArray(this.physicalConnectionType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  physicalConnectionSet?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0E6D0EC4-7C91-53E2-9F65-64BF713114B0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      physicalConnectionSet: 'PhysicalConnectionSet',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      physicalConnectionSet: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.physicalConnectionSet && typeof (this.physicalConnectionSet as any).validate === 'function') {
      (this.physicalConnectionSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

