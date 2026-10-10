// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupTextResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
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
   * The creation time.
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
   * The prompt message.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * ProjectResources
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
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
   * The unique identifier on the business system side, that is, the business ID.
   * 
   * @example
   * example
   */
  sourceId?: string;
  /**
   * @remarks
   * The status.
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

