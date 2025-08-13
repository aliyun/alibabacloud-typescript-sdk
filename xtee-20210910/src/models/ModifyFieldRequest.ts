// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFieldRequest extends $dara.Model {
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
   * Field classification
   * 
   * @example
   * REQUEST_PARAM
   */
  classify?: string;
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Enum type
   * 
   * @example
   * [{\\"name\\":\\"ENABLE\\",\\"value\\":\\"禁用\\"}]
   */
  enumData?: string;
  /**
   * @remarks
   * Variable ID
   * 
   * @example
   * 376773
   */
  id?: number;
  /**
   * @remarks
   * Variable name
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Region code
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      classify: 'classify',
      description: 'description',
      enumData: 'enumData',
      id: 'id',
      name: 'name',
      regId: 'regId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      classify: 'string',
      description: 'string',
      enumData: 'string',
      id: 'number',
      name: 'string',
      regId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

