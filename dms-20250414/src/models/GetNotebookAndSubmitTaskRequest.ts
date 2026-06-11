// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotebookAndSubmitTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The input parameters for the Notebook file. Pass the parameters in a dictionary format.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"dt\\": \\"2022-10-14\\"}
   */
  params?: string;
  /**
   * @remarks
   * The path of the Notebook file.
   * 
   * This parameter is required.
   * 
   * @example
   * /Workspace/code/default/test.ipynb
   */
  path?: string;
  /**
   * @remarks
   * The number of retries if scheduling fails.
   * 
   * @example
   * true
   */
  retry?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8vkixxxxx***
   */
  sessionId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 8630242382****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      path: 'Path',
      retry: 'Retry',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      path: 'string',
      retry: 'number',
      sessionId: 'string',
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

