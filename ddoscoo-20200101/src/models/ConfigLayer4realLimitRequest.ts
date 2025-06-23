// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer4RealLimitRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies the threshold of the clean bandwidth. Valid values: 0 to 15360. The value 0 indicates that rate limiting is never triggered. Unit: Mbit/s
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  limitValue?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      limitValue: 'LimitValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      limitValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

