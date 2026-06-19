// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType extends $dara.Model {
  accessPointId?: string;
  adLocation?: string;
  bandwidth?: number;
  businessStatus?: string;
  circuitCode?: string;
  creationTime?: string;
  description?: string;
  enabledTime?: string;
  lineOperator?: string;
  name?: string;
  peerLocation?: string;
  physicalConnectionId?: string;
  portNumber?: string;
  portType?: string;
  redundantPhysicalConnectionId?: string;
  spec?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      adLocation: 'AdLocation',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      circuitCode: 'CircuitCode',
      creationTime: 'CreationTime',
      description: 'Description',
      enabledTime: 'EnabledTime',
      lineOperator: 'LineOperator',
      name: 'Name',
      peerLocation: 'PeerLocation',
      physicalConnectionId: 'PhysicalConnectionId',
      portNumber: 'PortNumber',
      portType: 'PortType',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      spec: 'Spec',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      adLocation: 'string',
      bandwidth: 'number',
      businessStatus: 'string',
      circuitCode: 'string',
      creationTime: 'string',
      description: 'string',
      enabledTime: 'string',
      lineOperator: 'string',
      name: 'string',
      peerLocation: 'string',
      physicalConnectionId: 'string',
      portNumber: 'string',
      portType: 'string',
      redundantPhysicalConnectionId: 'string',
      spec: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
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
  pageNumber?: number;
  pageSize?: number;
  physicalConnectionSet?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet;
  requestId?: string;
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

