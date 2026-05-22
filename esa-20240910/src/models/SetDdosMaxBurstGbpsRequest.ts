// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDdosMaxBurstGbpsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esa-site-ads11w
   */
  instanceId?: string;
  /**
   * @remarks
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

