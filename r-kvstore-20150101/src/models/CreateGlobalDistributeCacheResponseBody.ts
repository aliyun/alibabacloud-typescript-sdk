// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalDistributeCacheResponseBody extends $dara.Model {
  globalInstanceId?: string;
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

