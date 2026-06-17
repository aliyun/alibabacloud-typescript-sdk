// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRiskLevelsRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Firewall instance.
   * 
   * @example
   * vipcloudfw-cn-7mz2fj8nm0u
   */
  instanceId?: string;
  /**
   * @remarks
   * The public IP address of the instance.
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

export class DescribeInstanceRiskLevelsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instances.
   */
  instances?: DescribeInstanceRiskLevelsRequestInstances[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstanceRiskLevelsRequestInstances },
      lang: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

