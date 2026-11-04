// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConnectKmsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The provider of the KMS instance. Currently, only Aliyun is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  KMProvider?: string;
  /**
   * @remarks
   * The ID of the KMS instance to enable.
   * 
   * This parameter is required.
   * 
   * @example
   * kst-phzz64f722a1buamw0****
   */
  kmsInstanceId?: string;
  /**
   * @remarks
   * Sets a vSwitch for the dual-zone deployment. The vSwitch must have at least one available IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1i512amda6d10a0****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) for the KMS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp19z7cwmltad5dff****
   */
  vpcId?: string;
  /**
   * @remarks
   * Sets two zones for the KMS instance. Dual-zone load balancing improves service availability and disaster recovery capabilities.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-k,cn-hangzhou-j
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      KMProvider: 'KMProvider',
      kmsInstanceId: 'KmsInstanceId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KMProvider: 'string',
      kmsInstanceId: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
      zoneIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

