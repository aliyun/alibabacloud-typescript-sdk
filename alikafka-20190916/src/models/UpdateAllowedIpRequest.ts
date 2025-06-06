// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAllowedIpRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses that you want to manage. You can specify a CIDR block. Example: **192.168.0.0/16**.
   * 
   * *   If the **UpdateType** parameter is set to **add**, specify one or more IP addresses for this parameter. Separate multiple IP addresses with commas (,).
   * *   If the **UpdateType** parameter is set to **delete**, specify only one IP address.
   * *   Exercise caution when you delete IP addresses.
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
   * *   **vpc**: a whitelist for access from a VPC.
   * *   **internet**: a whitelist for access from the Internet.
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
   * The ID of the instance.
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
   * *   **9092/9092**: Messages are transmitted in a virtual private cloud (VPC) by using the PLAINTEXT protocol.
   * *   **9093/9093**: Messages are transmitted over the Internet by using the SASL_SSL protocol.
   * *   **9094/9094**: Messages are transmitted in a VPC by using the SASL_PLAINTEXT protocol.
   * *   **9095/9095**: Messages are transmitted in a VPC by using the SASL_SSL protocol.
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
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of configuration change. Valid values:
   * 
   * *   **add**
   * *   **delete**
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

