// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingSessionsRequest extends $dara.Model {
  /**
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @example
   * ae7990f4-203d-494b-a5ea-e0babe9fa13d
   */
  clientId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @example
   * session-i205217481741918129226
   */
  sessionId?: string;
  /**
   * @example
   * SessionStarting
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientId: 'ClientId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sessionId: 'SessionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sessionId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

