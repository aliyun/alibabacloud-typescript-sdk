// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySnapshotCallbackAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication key for callbacks.
   * 
   * @example
   * yourkey
   */
  callbackAuthKey?: string;
  /**
   * @remarks
   * Indicates whether authentication for callbacks is enabled. Valid values:
   * 
   * - **yes**: enabled.
   * 
   * - **no**: disabled.
   * 
   * @example
   * yes
   */
  callbackReqAuth?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackAuthKey: 'CallbackAuthKey',
      callbackReqAuth: 'CallbackReqAuth',
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackAuthKey: 'string',
      callbackReqAuth: 'string',
      domainName: 'string',
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

