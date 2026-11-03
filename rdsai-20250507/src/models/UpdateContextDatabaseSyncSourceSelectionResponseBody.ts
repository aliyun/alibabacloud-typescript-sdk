// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextDatabaseSyncSourceSelectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data source ID, which is a system-generated UUID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContextDatabaseSyncSourceSelectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Sample value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateContextDatabaseSyncSourceSelectionResponseBodyData;
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
   * Sample value
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
   * Indicates whether the request is successful.
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
      data: UpdateContextDatabaseSyncSourceSelectionResponseBodyData,
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

