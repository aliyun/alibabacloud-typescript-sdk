// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetThreadResponseBodyVariables extends $dara.Model {
  /**
   * @example
   * kubenest
   */
  project?: string;
  /**
   * @example
   * hd1
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
  attributes?: { [key: string]: string };
  /**
   * @example
   * 2025-12-19T15:19:55.040403272+08:00
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * thread-t71rrw-1s7r7z9gu0v2s
   */
  threadId?: string;
  /**
   * @example
   * testLive
   */
  title?: string;
  /**
   * @example
   * 2025-12-19T15:19:55.040403272+08:00
   */
  updateTime?: string;
  variables?: GetThreadResponseBodyVariables;
  /**
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

