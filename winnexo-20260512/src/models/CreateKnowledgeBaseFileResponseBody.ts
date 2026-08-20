// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2025-11-12T03:08:56Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * oklabs_tongyici
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 911656E1-9A09-5C77-BAAD-915EB4958D68
   */
  requestId?: string;
  /**
   * @remarks
   * The export scope. Valid values:
   * - ALL: all.
   * - SELECT: selected rows.
   * 
   * @example
   * user_info projects pull_requests hook gists emails
   */
  scope?: string;
  /**
   * @remarks
   * The unique identifier on the business system side, which is the business ID.
   * 
   * @example
   * 2001549
   */
  sourceId?: string;
  /**
   * @remarks
   * The store status.
   * 
   * @example
   * 200
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      scope: 'scope',
      sourceId: 'sourceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      gmtCreate: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      scope: 'string',
      sourceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

