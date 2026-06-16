// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventVariableTemplateBindRequest extends $dara.Model {
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
   * The input parameters. Separate multiple values with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * age,ip
   */
  inputs?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * The type.
   * 
   * This parameter is required.
   * 
   * @example
   * NATIVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      inputs: 'inputs',
      regId: 'regId',
      templateCode: 'templateCode',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      inputs: 'string',
      regId: 'string',
      templateCode: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

