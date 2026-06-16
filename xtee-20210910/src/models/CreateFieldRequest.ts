// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFieldRequest extends $dara.Model {
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
   * The field classification.
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
   * 字段描述信息
   */
  description?: string;
  /**
   * @remarks
   * The enumeration data.
   * 
   * @example
   * enum
   */
  enumData?: string;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The business source.
   * 
   * @example
   * DEFINE
   */
  source?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      classify: 'classify',
      description: 'description',
      enumData: 'enumData',
      name: 'name',
      regId: 'regId',
      source: 'source',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      classify: 'string',
      description: 'string',
      enumData: 'string',
      name: 'string',
      regId: 'string',
      source: 'string',
      title: 'string',
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

