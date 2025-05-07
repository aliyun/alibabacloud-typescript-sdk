// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostpaidInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * @example
   * waf_v2_public_cn-x0r****gr1i
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 73A4E786-8235-50C0-9631-87C8****4A36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

