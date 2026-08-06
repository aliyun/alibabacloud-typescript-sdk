// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgSchemaPublishResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The publish content.
   * 
   * @example
   * test
   */
  content?: string;
  /**
   * @remarks
   * The publish status. Valid values:
   * - Publishing: Publishing in progress.
   * - Published: Published successfully.
   * - Partial: Partially completed.
   * - Failed: Failed.
   * - RollbackFailed: Publish failed and rollback failed.
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      status: 'Status',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      status: 'string',
      versionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKgSchemaPublishResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The publish result.
   */
  data?: GetKgSchemaPublishResultResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
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
      data: GetKgSchemaPublishResultResponseBodyData,
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

