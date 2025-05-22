// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigureSubscriptionInstanceRequestSourceEndpoint } from "./ConfigureSubscriptionInstanceRequestSourceEndpoint";
import { ConfigureSubscriptionInstanceRequestSubscriptionDataType } from "./ConfigureSubscriptionInstanceRequestSubscriptionDataType";
import { ConfigureSubscriptionInstanceRequestSubscriptionInstance } from "./ConfigureSubscriptionInstanceRequestSubscriptionInstance";


export class ConfigureSubscriptionInstanceRequest extends $dara.Model {
  sourceEndpoint?: ConfigureSubscriptionInstanceRequestSourceEndpoint;
  subscriptionDataType?: ConfigureSubscriptionInstanceRequestSubscriptionDataType;
  subscriptionInstance?: ConfigureSubscriptionInstanceRequestSubscriptionInstance;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter is about to be discontinued.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  /**
   * @remarks
   * 资源组ID。
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call the [DescribeSubscriptionInstances](https://help.aliyun.com/document_detail/49442.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtshp8n2ze4r5x****
   */
  subscriptionInstanceId?: string;
  /**
   * @remarks
   * The name of the change tracking instance.
   * 
   * > We recommend that you specify a descriptive name for easy identification. You do not need to use a unique name.
   * 
   * @example
   * MySQL Subscription
   */
  subscriptionInstanceName?: string;
  /**
   * @remarks
   * The network type of the change tracking instance. Set the value to **vpc**, which specifies the Virtual Private Cloud (VPC) network type.
   * 
   * > 
   * 
   * *   To use the new version of the change tracking feature, you must specify the SubscriptionInstanceNetworkType parameter. You must also specify the **SubscriptionInstance.VPCId** and **SubscriptionInstance.VSwitchID** parameters. If you do not specify the SubscriptionInstanceNetworkType parameter, the previous version of the change tracking feature is used.
   * 
   * *   The previous version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, and PolarDB-X 1.0 instances. The new version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and Oracle databases.
   * 
   * @example
   * vpc
   */
  subscriptionInstanceNetworkType?: string;
  /**
   * @remarks
   * The objects for which you want to track data changes. The value is a JSON string and can contain regular expressions. For more information, see [SubscriptionObjects](https://help.aliyun.com/document_detail/141902.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [{     "DBName": "dtstestdata" }]
   */
  subscriptionObject?: string;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionInstance: 'SubscriptionInstance',
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionInstanceNetworkType: 'SubscriptionInstanceNetworkType',
      subscriptionObject: 'SubscriptionObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: ConfigureSubscriptionInstanceRequestSourceEndpoint,
      subscriptionDataType: ConfigureSubscriptionInstanceRequestSubscriptionDataType,
      subscriptionInstance: ConfigureSubscriptionInstanceRequestSubscriptionInstance,
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
      subscriptionInstanceName: 'string',
      subscriptionInstanceNetworkType: 'string',
      subscriptionObject: 'string',
    };
  }

  validate() {
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.subscriptionDataType && typeof (this.subscriptionDataType as any).validate === 'function') {
      (this.subscriptionDataType as any).validate();
    }
    if(this.subscriptionInstance && typeof (this.subscriptionInstance as any).validate === 'function') {
      (this.subscriptionInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

