// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQpsModeRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the Anti-DDoS Pro instance.
   * 
   * >  You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-7e225i41****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metering method of QPS. Valid values:
   * 
   * *   **month**: monthly 95th percentile QPS.
   * *   **day**: daily 95th percentile QPS.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

