// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateUploadTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of comments.
   * 
   * @example
   * 50
   */
  commentCount?: number;
  /**
   * @remarks
   * Number of dialogues.
   * 
   * @example
   * 50
   */
  dialogueCount?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commentCount: 'CommentCount',
      dialogueCount: 'DialogueCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentCount: 'number',
      dialogueCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateUploadTemplateResponseBody extends $dara.Model {
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
   * Template validation result.
   */
  data?: ValidateUploadTemplateResponseBodyData;
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
   * Unique request identifier.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Operation status. Returns true on success. Returns false on failure.
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
      data: ValidateUploadTemplateResponseBodyData,
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

