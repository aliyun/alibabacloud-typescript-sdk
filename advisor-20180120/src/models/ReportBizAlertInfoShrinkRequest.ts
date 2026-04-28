// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportBizAlertInfoShrinkRequest extends $dara.Model {
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
  alertUidShrink?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      alertDescription: 'AlertDescription',
      alertDetail: 'AlertDetail',
      alertGrade: 'AlertGrade',
      alertLabels: 'AlertLabels',
      alertScene: 'AlertScene',
      alertToken: 'AlertToken',
      alertUidShrink: 'AlertUid',
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
      alertUidShrink: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

