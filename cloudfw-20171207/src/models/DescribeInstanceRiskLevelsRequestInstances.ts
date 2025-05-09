// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRiskLevelsRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID of your Cloud Firewall.
   * 
   * @example
   * vipcloudfw-cn-7mz2fj8nm0u
   */
  instanceId?: string;
  /**
   * @remarks
   * The public IP addresses of instances.
   */
  internetIp?: string[];
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 172.17.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * @example
   * 181ad081-e4f2-4e3e-b925-03b67f648397
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      internetIp: { 'type': 'array', 'itemType': 'string' },
      intranetIp: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.internetIp)) {
      $dara.Model.validateArray(this.internetIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

