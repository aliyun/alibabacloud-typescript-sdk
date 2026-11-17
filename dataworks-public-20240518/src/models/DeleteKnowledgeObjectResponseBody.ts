// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKnowledgeObjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the knowledge base to which the object belongs.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The ID of the knowledge object. For semantic models, use the model ID from the semantic layer. For documents, use the stable ID from the local document table. Callers must treat the ID as opaque and must not use a retrieval ID in its place.
   * 
   * @example
   * obj-document-001
   */
  knowledgeObjectId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeObjectId: 'KnowledgeObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      knowledgeObjectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKnowledgeObjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code, which is used to determine the error type when the request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: DeleteKnowledgeObjectResponseBodyData;
  /**
   * @remarks
   * The security error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request, which can be used to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteKnowledgeObjectResponseBodyData,
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

