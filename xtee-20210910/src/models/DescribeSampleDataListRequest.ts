// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleDataListRequest extends $dara.Model {
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
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The deletion status.
   * 
   * @example
   * DELETE
   */
  deleteTag?: string;
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
   * The query content.
   * 
   * @example
   * 手机号
   */
  queryContent?: string;
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
   * The sample ID.
   * 
   * @example
   * 5467
   */
  sampleId?: number;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * 1
   */
  scene?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * CREATE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      deleteTag: 'deleteTag',
      pageSize: 'pageSize',
      queryContent: 'queryContent',
      regId: 'regId',
      sampleId: 'sampleId',
      scene: 'scene',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'string',
      deleteTag: 'string',
      pageSize: 'string',
      queryContent: 'string',
      regId: 'string',
      sampleId: 'number',
      scene: 'string',
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

