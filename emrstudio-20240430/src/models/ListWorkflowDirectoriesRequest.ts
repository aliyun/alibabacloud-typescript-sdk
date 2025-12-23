// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowDirectoriesRequest extends $dara.Model {
  /**
   * @example
   * wd-y98v7non5dx****
   */
  directoryId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @example
   * wd-y98v7non5d****
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      parentDirectoryId: 'parentDirectoryId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      parentDirectoryId: 'string',
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

