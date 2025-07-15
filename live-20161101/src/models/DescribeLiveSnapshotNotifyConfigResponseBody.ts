// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveSnapshotNotifyConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * www.yourdomain***.com
   */
  domainName?: string;
  /**
   * @remarks
   * The callback authentication key.
   * 
   * @example
   * yourkey
   */
  notifyAuthKey?: string;
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
  notifyReqAuth?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://callback.yourdomain***.com
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5056369B-D337-499E-B8B7-B761BD37B08A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      notifyAuthKey: 'NotifyAuthKey',
      notifyReqAuth: 'NotifyReqAuth',
      notifyUrl: 'NotifyUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      notifyAuthKey: 'string',
      notifyReqAuth: 'string',
      notifyUrl: 'string',
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

