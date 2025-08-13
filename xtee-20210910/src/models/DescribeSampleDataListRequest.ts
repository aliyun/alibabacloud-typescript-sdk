// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleDataListRequest extends $dara.Model {
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Deletion status
   * 
   * @example
   * DELETE
   */
  deleteTag?: string;
  /**
   * @remarks
   * Page size, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Query content
   * 
   * @example
   * 手机号
   */
  queryContent?: string;
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
   * Sample ID.
   * 
   * @example
   * 5467
   */
  sampleId?: number;
  /**
   * @remarks
   * Scene
   * 
   * @example
   * 1
   */
  scene?: string;
  /**
   * @remarks
   * Status.
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

