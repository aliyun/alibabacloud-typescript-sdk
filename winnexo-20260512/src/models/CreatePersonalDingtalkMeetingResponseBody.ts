// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalDingtalkMeetingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
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
   * 2025-11-14T02:18:27Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * oklabs_tongyici
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B49109FE-5BB1-593C-915D-F5A99D9F5435
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
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
   * 2000398
   */
  sourceId?: string;
  /**
   * @remarks
   * The task running status.
   * 
   * @example
   * updated
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

