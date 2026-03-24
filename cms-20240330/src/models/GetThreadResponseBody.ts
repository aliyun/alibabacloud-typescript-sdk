// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetThreadResponseBodyVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * test
   */
  project?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThreadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The attributes.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The time when the session was created.
   * 
   * @example
   * 2025-12-19T15:19:55.040403272+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * @example
   * test
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The session status.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * thread_id01
   */
  threadId?: string;
  /**
   * @remarks
   * The session title.
   * 
   * @example
   * testLive
   */
  title?: string;
  /**
   * @remarks
   * The time when the thread was last updated.
   * 
   * @example
   * 2025-12-19T15:19:55.040403272+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The session properties.
   */
  variables?: GetThreadResponseBodyVariables;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 1231
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      createTime: 'createTime',
      digitalEmployeeName: 'digitalEmployeeName',
      requestId: 'requestId',
      status: 'status',
      threadId: 'threadId',
      title: 'title',
      updateTime: 'updateTime',
      variables: 'variables',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      digitalEmployeeName: 'string',
      requestId: 'string',
      status: 'string',
      threadId: 'string',
      title: 'string',
      updateTime: 'string',
      variables: GetThreadResponseBodyVariables,
      version: 'number',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(this.variables && typeof (this.variables as any).validate === 'function') {
      (this.variables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

