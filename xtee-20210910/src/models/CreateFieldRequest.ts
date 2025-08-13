// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFieldRequest extends $dara.Model {
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
   * Field classification.
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
   * 字段描述信息
   */
  description?: string;
  /**
   * @remarks
   * Enum data.
   * 
   * @example
   * enum
   */
  enumData?: string;
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Business source.
   * 
   * @example
   * DEFINE
   */
  source?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * Field type.
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

