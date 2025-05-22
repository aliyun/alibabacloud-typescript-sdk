// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSynchronizationJobRequestDestinationEndpoint } from "./CreateSynchronizationJobRequestDestinationEndpoint";
import { CreateSynchronizationJobRequestSourceEndpoint } from "./CreateSynchronizationJobRequestSourceEndpoint";


export class CreateSynchronizationJobRequest extends $dara.Model {
  destinationEndpoint?: CreateSynchronizationJobRequestDestinationEndpoint;
  sourceEndpoint?: CreateSynchronizationJobRequestSourceEndpoint;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The **ClientToken** parameter can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * If you set the **SourceEndpoint.InstanceType** parameter to **DRDS**, you must specify the DBInstanceCount parameter. This parameter specifies the number of private RDS instances attached to the source PolarDB-X instance. Default value: **1**.
   * 
   * @example
   * 3
   */
  DBInstanceCount?: number;
  /**
   * @remarks
   * The ID of the region where the destination database resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * >  If the **SourceRegion** parameter is set to the China (Hong Kong) region or a region outside the Chinese mainland, you must set the DestRegion parameter to the same region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  ownerId?: string;
  /**
   * @remarks
   * The billing method of the data synchronization instance.
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid** (default value): pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle of the subscription instance. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * >  You must specify this parameter only if you set the PayType parameter to **PrePaid**.
   * 
   * @example
   * Year
   */
  period?: string;
  regionId?: string;
  /**
   * @remarks
   * Resource GroupId
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the source database resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The specification of the data synchronization instance. Valid values: **micro**, **small**, **medium**, and **large**.
   * 
   * >  For more information about the test performance of each specification, see [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * This parameter is required.
   * 
   * @example
   * small
   */
  synchronizationJobClass?: string;
  /**
   * @remarks
   * The synchronization topology. Valid values:
   * 
   * *   **oneway**: one-way synchronization
   * *   **bidirectional**: two-way synchronization
   * 
   * > 
   * *   The default value is **oneway**.
   * *   This parameter can be set to **bidirectional** only when the **SourceEndpoint.InstanceType** and **DestinationEndpoint.InstanceType** parameters are set to **MySQL**, **PolarDB**, or **Redis**.
   * 
   * @example
   * oneway
   */
  topology?: string;
  /**
   * @remarks
   * The subscription length.
   * 
   * *   If the billing cycle is **Year**, the value range is **1 to 5**.
   * *   If the billing cycle is **Month**, the value range is **1 to 60**.
   * 
   * >  You must specify this parameter only if you set the PayType parameter to **PrePaid**.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The network type. Valid value: **Intranet**, which indicates virtual private cloud (VPC).
   * 
   * @example
   * Intranet
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpoint: 'DestinationEndpoint',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      DBInstanceCount: 'DBInstanceCount',
      destRegion: 'DestRegion',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceRegion: 'SourceRegion',
      synchronizationJobClass: 'SynchronizationJobClass',
      topology: 'Topology',
      usedTime: 'UsedTime',
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpoint: CreateSynchronizationJobRequestDestinationEndpoint,
      sourceEndpoint: CreateSynchronizationJobRequestSourceEndpoint,
      accountId: 'string',
      clientToken: 'string',
      DBInstanceCount: 'number',
      destRegion: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceRegion: 'string',
      synchronizationJobClass: 'string',
      topology: 'string',
      usedTime: 'number',
      networkType: 'string',
    };
  }

  validate() {
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

