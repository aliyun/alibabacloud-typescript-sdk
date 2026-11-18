// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalDistributeCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the distributed instance.
   * 
   * @example
   * gr-8vbzg1y6m****t38p
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-8vb6ffc5****4ec4
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E681E498-5A0D-44F2-B1A7-912DC3******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalInstanceId: 'GlobalInstanceId',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalInstanceId: 'string',
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

