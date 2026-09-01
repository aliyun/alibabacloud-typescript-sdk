// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryKnowledgeBaseFilesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * AclProjectionNotFound
   */
  errorCode?: string;
  /**
   * @example
   * No active ACL projection exists for the IM document
   */
  errorMessage?: string;
  /**
   * @example
   * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
   */
  fileId?: string;
  /**
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
   * @example
   * 0
   */
  failedCount?: number;
  items?: RetryKnowledgeBaseFilesResponseBodyItems[];
  /**
   * @example
   * CED079B7-A408-41A1-BFF1-EC608E******
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  succeededCount?: number;
  /**
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

