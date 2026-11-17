// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBaseBuildTaskResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The temporary Object Storage Service (OSS) download URL issued to the current caller when this operation is called. The URL is not stored.
   * 
   * @example
   * https://example.invalid/short-lived-result-download
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The validity period of the download URL, in seconds. Request a new URL after it expires.
   * 
   * @example
   * 300
   */
  expiresIn?: number;
  /**
   * @remarks
   * The ID of the knowledge base to which the result belongs.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The ID of the task instance that produced the result.
   * 
   * @example
   * 20001
   */
  taskInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      expiresIn: 'ExpiresIn',
      knowledgeBaseId: 'KnowledgeBaseId',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      expiresIn: 'number',
      knowledgeBaseId: 'string',
      taskInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseBuildTaskResultResponseBody extends $dara.Model {
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
  data?: GetKnowledgeBaseBuildTaskResultResponseBodyData;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used for troubleshooting.
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
      data: GetKnowledgeBaseBuildTaskResultResponseBodyData,
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

