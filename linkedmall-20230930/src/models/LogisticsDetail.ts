// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogisticsDetail extends $dara.Model {
  /**
   * @example
   * 2023-09-01 00:00:00
   */
  ocurrTimeStr?: string;
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

