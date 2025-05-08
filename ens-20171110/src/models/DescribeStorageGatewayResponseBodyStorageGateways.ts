// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageGatewayResponseBodyStorageGateways extends $dara.Model {
  /**
   * @remarks
   * The internal CIDR block.
   * 
   * @example
   * 192.168.2.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the storage gateway was created. The time is displayed in UTC.
   * 
   * @example
   * 2024-05-14T03:07:47Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the storage gateway.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IP address of the service.
   * 
   * @example
   * *.*.*.*
   */
  serviceIp?: string;
  /**
   * @remarks
   * The status of the storage gateway. Valid values:
   * 
   * *   creating
   * *   available
   * *   deleting
   * *   deleted
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the storage gateway.
   * 
   * @example
   * sgw-***
   */
  storageGatewayId?: string;
  /**
   * @remarks
   * The name of the storage gateway.
   * 
   * @example
   * testGateway
   */
  storageGatewayName?: string;
  /**
   * @remarks
   * The type of the storage gateway. Default value: 1, which indicates iSCSI.
   * 
   * @example
   * 1
   */
  storageGatewayType?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * n-***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      creationTime: 'CreationTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      serviceIp: 'ServiceIp',
      status: 'Status',
      storageGatewayId: 'StorageGatewayId',
      storageGatewayName: 'StorageGatewayName',
      storageGatewayType: 'StorageGatewayType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      creationTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      serviceIp: 'string',
      status: 'string',
      storageGatewayId: 'string',
      storageGatewayName: 'string',
      storageGatewayType: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

