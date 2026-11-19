// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskConcurrencyRequest extends $dara.Model {
  /**
   * @example
   * B9191F0E57
   */
  applicationCode?: string;
  /**
   * @example
   * abc123***
   */
  callerUacAccountId?: string;
  /**
   * @example
   * 1ab92c
   */
  currentWorkspaceCode?: string;
  /**
   * @example
   * abc123***
   */
  currentWorkspaceId?: string;
  /**
   * @example
   * 12345
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      callerUacAccountId: 'CallerUacAccountId',
      currentWorkspaceCode: 'CurrentWorkspaceCode',
      currentWorkspaceId: 'CurrentWorkspaceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      callerUacAccountId: 'string',
      currentWorkspaceCode: 'string',
      currentWorkspaceId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

