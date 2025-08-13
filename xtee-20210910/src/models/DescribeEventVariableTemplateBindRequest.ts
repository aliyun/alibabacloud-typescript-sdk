// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventVariableTemplateBindRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages. Default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Input parameters, separated by commas if multiple.
   * 
   * This parameter is required.
   * 
   * @example
   * age,ip
   */
  inputs?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Template code.
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * Type
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

