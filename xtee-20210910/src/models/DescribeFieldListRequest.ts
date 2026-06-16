// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFieldListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query parameter name or title.
   * 
   * @example
   * ip
   */
  condition?: string;
  /**
   * @remarks
   * The selected fields.
   * 
   * @example
   * sex,ip,id
   */
  inputs?: string;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      condition: 'condition',
      inputs: 'inputs',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      condition: 'string',
      inputs: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

