// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagInfoBySelectionResponseBodyDataParamListValueDict extends $dara.Model {
  /**
   * @remarks
   * The English name.
   * 
   * @example
   * Aliyun
   */
  code?: string;
  /**
   * @remarks
   * The Chinese name.
   * 
   * @example
   * 阿里云
   */
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

