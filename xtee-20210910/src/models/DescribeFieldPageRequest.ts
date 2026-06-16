// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFieldPageRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
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
   * The query parameter: name or title.
   * 
   * @example
   * age/年龄
   */
  condition?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
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
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
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
   * The field source.
   * 
   * @example
   * DEFINE
   */
  source?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
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
      condition: 'condition',
      currentPage: 'currentPage',
      name: 'name',
      pageSize: 'pageSize',
      regId: 'regId',
      source: 'source',
      status: 'status',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      classify: 'string',
      condition: 'string',
      currentPage: 'string',
      name: 'string',
      pageSize: 'string',
      regId: 'string',
      source: 'string',
      status: 'string',
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

