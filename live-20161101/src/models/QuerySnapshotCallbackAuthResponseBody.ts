// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySnapshotCallbackAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The callback authentication key.
   * 
   * @example
   * yourkey
   */
  callbackAuthKey?: string;
  /**
   * @remarks
   * Indicates whether callback authentication is enabled. Valid values:
   * 
   * *   **yes**: Callback authentication is enabled.
   * *   **no**: Callback authentication is disabled.
   * 
   * @example
   * yes
   */
  callbackReqAuth?: string;
  /**
   * @remarks
   * The main streaming domain.
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

