// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTeamResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The team name. The name can contain only lowercase letters, digits, and hyphens (-). It must start and end with a lowercase letter or digit and must be 1 to 128 characters in length.
   * 
   * @example
   * team-01
   */
  name?: string;
  /**
   * @remarks
   * The team status. Valid values:
   * - Creating
   * - Active
   * - Updating
   * - Deleting
   * - Failed
   * - Deleted
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * tm-123456
   */
  teamId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
      teamId: 'teamId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'string',
      teamId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTeamResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The information about the deleted team.
   */
  data?: DeleteTeamResponseBodyData;
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
   * The response message. An error description is returned if the request failed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteTeamResponseBodyData,
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

