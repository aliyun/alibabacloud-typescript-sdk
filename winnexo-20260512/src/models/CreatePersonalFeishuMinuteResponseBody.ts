// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalFeishuMinuteResponseBody extends $dara.Model {
  /**
   * @remarks
   * SUCCESS indicates success. In case of failure, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
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
   * The creation time.
   * 
   * @example
   * 2026-03-04 11:12:03
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The operation message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * issue_research
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FEE93-17FB-5369-BB65-1188C3A14B0A
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * read:user,read:repo,write:repo,read:org,read:group
   */
  scope?: string;
  /**
   * @remarks
   * The original project ID.
   * 
   * @example
   * 2001086
   */
  sourceId?: string;
  /**
   * @remarks
   * The status.
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

