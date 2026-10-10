// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation timestamp of the customer group, in milliseconds.
   * 
   * @example
   * example
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Project Files
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E68654BD-F7BA-5837-8686-5645D739A47C
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * example
   */
  scope?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * example
   */
  sourceId?: string;
  /**
   * @remarks
   * The signing status. Valid values:
   * - CREATED: Created but not signed.
   * - SUCCESS: Signed successfully.
   * - STOP: Terminated.
   * 
   * @example
   * example
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      groupId: 'groupId',
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
      groupId: 'string',
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

