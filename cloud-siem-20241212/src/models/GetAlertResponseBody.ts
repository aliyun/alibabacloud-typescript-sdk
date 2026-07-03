// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertResponseBodyAlert extends $dara.Model {
  /**
   * @remarks
   * The alert content.
   * 
   * @example
   * {***}
   */
  alertRecord?: string;
  /**
   * @remarks
   * The alert UUID.
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
   * If this value is true, the minor engine version is not the latest version.
   * 
   * > If the minor engine version of your server is not the latest version, the sampling logs may be inaccurate, which causes inaccurate IP statistics. We recommend that you upgrade the minor engine version at your earliest convenience.
   */
  alert?: GetAlertResponseBodyAlert;
  /**
   * @remarks
   * The request ID.
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

