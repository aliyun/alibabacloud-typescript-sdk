// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequest extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * project1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  offlineDatasourceId?: string;
  /**
   * @example
   * 90
   */
  offlineLifeCycle?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  onlineDatasourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 324
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      offlineDatasourceId: 'OfflineDatasourceId',
      offlineLifeCycle: 'OfflineLifeCycle',
      onlineDatasourceId: 'OnlineDatasourceId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      offlineDatasourceId: 'string',
      offlineLifeCycle: 'number',
      onlineDatasourceId: 'string',
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

