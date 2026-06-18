// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDdosMaxBurstGbpsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can call the [ListUserRatePlanInstances](https://help.aliyun.com/document_detail/2852398.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-site-ads11w
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum burstable protection bandwidth for the DDoS instance in mainland China. The unit is Gbps.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  maxBurstGbps?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxBurstGbps: 'MaxBurstGbps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxBurstGbps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

