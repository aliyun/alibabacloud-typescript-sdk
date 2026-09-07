// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveKnowledgeTagsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The location of the knowledge base file.
   * 
   * @example
   * oss://bucket/doc.pdf
   */
  fileLocation?: string;
  /**
   * @remarks
   * The message returned by the operation.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The number of tags that were successfully deleted.
   * 
   * @example
   * 1
   */
  removed?: number;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileLocation: 'FileLocation',
      message: 'Message',
      removed: 'Removed',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileLocation: 'string',
      message: 'string',
      removed: 'number',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveKnowledgeTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: RemoveKnowledgeTagsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RemoveKnowledgeTagsResponseBodyData,
      requestId: 'string',
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

