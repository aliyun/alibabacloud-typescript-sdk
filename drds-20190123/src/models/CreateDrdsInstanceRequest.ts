// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDrdsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * c1dd299c-10c6-11ea-bbbb-************
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies the description of the instance. The description must meet the following requirements:
   * 
   * *   The description cannot contain the prefix http:// or https://.
   * *   The description must start with a letter or a Chinese character, and can contain uppercase and lowercase letters, Chinese characters, digits, underscores (_), and hyphens (-).
   * *   The description must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies the purchase duration of the subscription instance.
   * 
   * *   If the PricingCycle parameter is set to year, the value range of the Duration parameter is 1 to 3.
   * *   If the PricingCycle parameter is set to month, the value range of the Duration parameter is 1 to 9.
   * 
   * >  This parameter only takes effect when the PayType parameter is set to drdsPre.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies the instance type of the instance. Valid values:
   * 
   * *   **drds.sn2.4c16g**: The instance is of the Starter Edition.
   * *   **drds.sn2.8c32g**: The instance is of the Standard Edition
   * *   **drds.sn2.16c64g**: The instance is of the Enterprise Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * drds.sn2.4c16g
   */
  instanceSeries?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic renewal. Valid values:
   * 
   * *   **true**: If the PricingCycle parameter is set to month, the subscription is automatically renewed for one month. If the PricingCycle parameter is set to year, the subscription is automatically renewed for one year.
   * *   **false**: The auto-renewal feature is disabled for the instance.
   * 
   * >  This parameter only takes effect when the PayType parameter is set to drdsPre.
   * 
   * @example
   * true
   */
  isAutoRenew?: boolean;
  /**
   * @remarks
   * Specifies the ID of the primary instance. This parameter is only required when you create a read-only instance.
   * 
   * @example
   * drds***********
   */
  masterInstId?: string;
  /**
   * @remarks
   * Specifies the MySQL version that is supported by the instance. Valid values:
   * 
   * *   **5**: The instance is fully compatible with MySQL 5.x. This value is the default value.
   * *   **8**: The instance is fully compatible with MySQL 8.0.
   * 
   * >  This parameter only takes effect when you create a primary instance. By default, the MySQL version of the read-only instance is the same as that of the primary instance.
   * 
   * @example
   * 5
   */
  mySQLVersion?: number;
  /**
   * @remarks
   * Specifies the billing method of the instance. Valid values:
   * 
   * *   **drdsPre**: The instance uses the subscription billing method.
   * *   **drdsPost**: The instance uses the pay-as-you-go billing method.
   * *   **drdsRo**: By default, the pay-as-you-go billing method is used when you create read-only instances.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsPost
   */
  payType?: string;
  /**
   * @remarks
   * Specifies the unit of the subscription duration of the subscription instance. Valid values:
   * 
   * *   **year**: The unit of the subscription duration is year.
   * *   **month**: The unit of the subscription duration is month.
   * 
   * >  This parameter is required if you set the PayType parameter to drdsPre.
   * 
   * @example
   * month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Specifies the number of instances to be created. You can set the value only to 1. The value specifies that you can create one instance each time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * Specifies the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies the ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies the specification code of the instance. The value consists of the instance type and the specified instance specification. For example, you can set the value to drds.sn2.4c16g.8c32g.
   * 
   * This parameter is required.
   * 
   * @example
   * drds.sn2.4c16g.8C32g
   */
  specification?: string;
  /**
   * @remarks
   * Specifies the type of the instance. Set the value to PRIVATE. The value PRIVATE specifies that the instance is a dedicated instance.
   * 
   * >  You can also set the value to 1 to specify that the instance is a dedicated instance.
   * 
   * This parameter is required.
   * 
   * @example
   * PRIVATE
   */
  type?: string;
  /**
   * @remarks
   * Specifies the ID of the VPC.
   * 
   * @example
   * vpc-**********
   */
  vpcId?: string;
  /**
   * @remarks
   * Specifies the ID of the vSwitch.
   * 
   * @example
   * vsw-**********
   */
  vswitchId?: string;
  /**
   * @remarks
   * Specifies the zone ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  /**
   * @remarks
   * Specifies whether the instance is a high-availability instance.
   * 
   * @example
   * true
   */
  isHa?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      duration: 'Duration',
      instanceSeries: 'InstanceSeries',
      isAutoRenew: 'IsAutoRenew',
      masterInstId: 'MasterInstId',
      mySQLVersion: 'MySQLVersion',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      specification: 'Specification',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
      isHa: 'isHa',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      duration: 'number',
      instanceSeries: 'string',
      isAutoRenew: 'boolean',
      masterInstId: 'string',
      mySQLVersion: 'number',
      payType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      specification: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
      isHa: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

