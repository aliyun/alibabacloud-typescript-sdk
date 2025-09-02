// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableIntroWikiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the metatable.
   * 
   * @example
   * \\# Business requirements\\n\\n\\&lt;a name=\\&quot;xiw5n\\&quot;
   */
  content?: string;
  /**
   * @remarks
   * The time when the metatable was created.
   * 
   * @example
   * 1584444247000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the metatable.
   * 
   * @example
   * abc
   */
  creator?: string;
  /**
   * @remarks
   * The name of the user who creates the metatable.
   * 
   * @example
   * abc
   */
  creatorName?: string;
  /**
   * @remarks
   * The time when the metatable was last modified.
   * 
   * @example
   * 1584444247000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      modifiedTime: 'ModifiedTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'number',
      creator: 'string',
      creatorName: 'string',
      modifiedTime: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableIntroWikiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GetMetaTableIntroWikiResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
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
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableIntroWikiResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

