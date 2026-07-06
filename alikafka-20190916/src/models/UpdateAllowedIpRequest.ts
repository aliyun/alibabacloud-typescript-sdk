// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAllowedIpRequest extends $dara.Model {
  /**
   * @remarks
   * The IP list. It can be a CIDR block, for example: **192.168.0.0/16**.
   * 
   * - When **UpdateType** is set to **add**, you can specify multiple items separated by commas (,).
   * - When **UpdateType** is set to **delete**, you can specify only one item at a time.
   * - Exercise caution when deleting.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  allowedListIp?: string;
  /**
   * @remarks
   * The type of the whitelist. Valid values:
   * 
   * - **vpc**: virtual private cloud (VPC).
   * - **internet**: Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  allowedListType?: string;
  /**
   * @remarks
   * The description of the whitelist.
   * 
   * @example
   * tf-testAccEcsImageConfigBasic3549descriptionChange
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-0pp1cng20***
   */
  instanceId?: string;
  /**
   * @remarks
   * The port range. Valid values:
   * 
   * - **9092/9092**: virtual private cloud (VPC) - PLAINTEXT protocol.
   * - **9093/9093**: Internet - SASL_SSL protocol.
   * - **9094/9094**: virtual private cloud (VPC) - SASL_PLAINTEXT protocol.
   * - **9095/9095**: virtual private cloud (VPC) - SASL_SSL protocol.
   * 
   * This parameter must correspond to **AllowdedListType**.
   * 
   * This parameter is required.
   * 
   * @example
   * 9092/9092
   */
  portRange?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The update type. Valid values:
   * 
   * - **add**: add.
   * - **delete**: delete.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  updateType?: string;
  static names(): { [key: string]: string } {
    return {
      allowedListIp: 'AllowedListIp',
      allowedListType: 'AllowedListType',
      description: 'Description',
      instanceId: 'InstanceId',
      portRange: 'PortRange',
      regionId: 'RegionId',
      updateType: 'UpdateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedListIp: 'string',
      allowedListType: 'string',
      description: 'string',
      instanceId: 'string',
      portRange: 'string',
      regionId: 'string',
      updateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

