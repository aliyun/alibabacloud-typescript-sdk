// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportBizAlertInfoRequest extends $dara.Model {
  alertDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertDetail?: string;
  alertGrade?: string;
  alertLabels?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertScene?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertToken?: string;
  alertUid?: number[];
  language?: string;
  static names(): { [key: string]: string } {
    return {
      alertDescription: 'AlertDescription',
      alertDetail: 'AlertDetail',
      alertGrade: 'AlertGrade',
      alertLabels: 'AlertLabels',
      alertScene: 'AlertScene',
      alertToken: 'AlertToken',
      alertUid: 'AlertUid',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDescription: 'string',
      alertDetail: 'string',
      alertGrade: 'string',
      alertLabels: 'string',
      alertScene: 'string',
      alertToken: 'string',
      alertUid: { 'type': 'array', 'itemType': 'number' },
      language: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertUid)) {
      $dara.Model.validateArray(this.alertUid);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

