// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetDocumentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Category UUID
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * User-defined unique ID for the document.
   * 
   * @example
   * 用户指定的文档唯一ID
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique ID of the document.
   * 
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Tags.
   */
  tags?: string[];
  /**
   * @remarks
   * Document title.
   * 
   * @example
   * 文章标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      docId: 'DocId',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Business data.
   */
  data?: UpdateDatasetDocumentResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. A value of true indicates success. A value of false indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateDatasetDocumentResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

