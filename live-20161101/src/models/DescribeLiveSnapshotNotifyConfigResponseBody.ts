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
   * The authentication key for the callback.
   * 
   * @example
   * yourkey
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * Indicates whether callback authentication is enabled. Valid values:
   * 
   * - **yes**: Enabled.
   * 
   * - **no**: Disabled.
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
   * The request ID.
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

