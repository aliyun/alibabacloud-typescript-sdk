// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticBizQpsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Proxy instance.
   * 
   * >  You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metering method for the burstable QPS. Valid values:
   * 
   * *   **month**: monthly 95th percentile
   * *   **day**: daily 95th percentile QPS
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  mode?: string;
  /**
   * @remarks
   * The burstable QPS value.
   * 
   * >  The default value is 300,000 for the Chinese mainland and 150,000 for regions outside the Chinese mainland.
   * 
   * @example
   * 300000
   */
  opsElasticQps?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
      opsElasticQps: 'OpsElasticQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
      opsElasticQps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

