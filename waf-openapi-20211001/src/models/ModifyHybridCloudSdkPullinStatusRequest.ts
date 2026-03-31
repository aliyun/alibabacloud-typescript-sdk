// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridCloudSdkPullinStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-7pp2le***01
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the SDK.
   * 
   * This parameter is required.
   * 
   * @example
   * b3dbc5153317c79d8ca9f9***ea
   */
  mid?: string;
  /**
   * @remarks
   * The status of traffic redirection. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  pullinStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mid: 'Mid',
      pullinStatus: 'PullinStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mid: 'string',
      pullinStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

