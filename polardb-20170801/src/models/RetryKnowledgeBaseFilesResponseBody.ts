// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryKnowledgeBaseFilesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * AclProjectionNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * No active ACL projection exists for the IM document
   */
  errorMessage?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
   */
  fileId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileId: 'FileId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      fileId: 'string',
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

export class RetryKnowledgeBaseFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of failed retries.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The list of retry results.
   */
  items?: RetryKnowledgeBaseFilesResponseBodyItems[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CED079B7-A408-41A1-BFF1-EC608E******
   */
  requestId?: string;
  /**
   * @remarks
   * The number of successful retries.
   * 
   * @example
   * 1
   */
  succeededCount?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      items: 'Items',
      requestId: 'RequestId',
      succeededCount: 'SucceededCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      items: { 'type': 'array', 'itemType': RetryKnowledgeBaseFilesResponseBodyItems },
      requestId: 'string',
      succeededCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

