// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertResponseBodyAlert extends $dara.Model {
  /**
   * @remarks
   * The content of the alert.
   * 
   * @example
   * {***}
   */
  alertRecord?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_1175554881779200_e59368b3ce1690eae7978f7712a69050
   */
  alertUuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertRecord: 'AlertRecord',
      alertUuid: 'AlertUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRecord: 'string',
      alertUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the minor version is not the latest version.
   * 
   * > If the minor version of your server is not the latest, the sampled logs may be inaccurate, resulting in inaccurate IP address statistics. Therefore, we recommend that you upgrade the minor version of your server as soon as possible.
   */
  alert?: GetAlertResponseBodyAlert;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: GetAlertResponseBodyAlert,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alert && typeof (this.alert as any).validate === 'function') {
      (this.alert as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

