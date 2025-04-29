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

