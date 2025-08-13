// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFieldPageRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for request and response messages, default value is **zh**. Values:
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
   * Query input parameter name or title
   * 
   * @example
   * age/年龄
   */
  condition?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Field name
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Number of items per page, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: string;
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
   * Field source
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
   * Field type
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

