// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableFeeRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * This parameter is required.
   */
  ids?: number[];
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ids: 'ids',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ids: { 'type': 'array', 'itemType': 'number' },
      regId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

