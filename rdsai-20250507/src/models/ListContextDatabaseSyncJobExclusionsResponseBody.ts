// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseSyncJobExclusionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of document IDs.
   * 
   * @example
   * ["doc-as1llqmkol****"]
   */
  documentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      documentIds: 'DocumentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.documentIds)) {
      $dara.Model.validateArray(this.documentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseSyncJobExclusionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Example value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListContextDatabaseSyncJobExclusionsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 1
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Example value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * id-001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: ListContextDatabaseSyncJobExclusionsResponseBodyData,
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

