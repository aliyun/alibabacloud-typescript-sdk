// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTeamResponseBodyData extends $dara.Model {
  /**
   * @example
   * team-01
   */
  name?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * tm-123456
   */
  teamId?: string;
  /**
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
   * @example
   * SUCCESS
   */
  code?: string;
  data?: DeleteTeamResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * request-123456
   */
  requestId?: string;
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

