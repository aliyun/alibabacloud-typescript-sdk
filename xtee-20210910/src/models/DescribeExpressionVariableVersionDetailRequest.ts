// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressionVariableVersionDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Associated variable code.
   * 
   * @example
   * ex_0kWIfZ27c525
   */
  objectCode?: string;
  /**
   * @remarks
   * Associated variable primary key ID.
   * 
   * @example
   * 397625
   */
  objectId?: number;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Variable type.
   * 
   * @example
   * EXPRESSION
   */
  type?: string;
  /**
   * @remarks
   * Version number.
   * 
   * @example
   * 2
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      objectCode: 'objectCode',
      objectId: 'objectId',
      regId: 'regId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      objectCode: 'string',
      objectId: 'number',
      regId: 'string',
      type: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

