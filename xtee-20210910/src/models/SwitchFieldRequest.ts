// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchFieldRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Primary Key ID
   * 
   * @example
   * 250002
   */
  id?: number;
  /**
   * @remarks
   * Parameter Name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Region Code
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Field Source
   * 
   * @example
   * DEFINE
   */
  source?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'id',
      name: 'name',
      regId: 'regId',
      source: 'source',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      name: 'string',
      regId: 'string',
      source: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

