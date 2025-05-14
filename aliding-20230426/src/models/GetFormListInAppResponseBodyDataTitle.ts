// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFormListInAppResponseBodyDataTitle extends $dara.Model {
  /**
   * @example
   * form
   */
  enUS?: string;
  zhCN?: string;
  static names(): { [key: string]: string } {
    return {
      enUS: 'EnUS',
      zhCN: 'ZhCN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enUS: 'string',
      zhCN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

