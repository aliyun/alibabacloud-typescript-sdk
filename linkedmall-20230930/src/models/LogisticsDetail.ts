// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogisticsDetail extends $dara.Model {
  /**
   * @remarks
   * Time when the logistics event occurred
   * 
   * @example
   * 2023-09-11T12:22:24.000+08:00
   */
  ocurrTimeStr?: string;
  /**
   * @remarks
   * Description of the logistics event
   * 
   * @example
   * 已签收
   */
  standerdDesc?: string;
  static names(): { [key: string]: string } {
    return {
      ocurrTimeStr: 'ocurrTimeStr',
      standerdDesc: 'standerdDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ocurrTimeStr: 'string',
      standerdDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

