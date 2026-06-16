// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFieldRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The field category.
   * 
   * @example
   * REQUEST_PARAM
   */
  classify?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The enumeration type.
   * 
   * @example
   * [{\\"name\\":\\"ENABLE\\",\\"value\\":\\"禁用\\"}]
   */
  enumData?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 376773
   */
  id?: number;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * age
   */
  name?: string;
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
  /**
   * @remarks
   * The title.
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

