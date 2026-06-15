// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectFeatureEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * Feature entity ID.
   * 
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @remarks
   * Join ID used to associate with feature views.
   * 
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @remarks
   * Feature entity name.
   * 
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @remarks
   * Project name.
   * 
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 34245
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      featureEntityId: 'FeatureEntityId',
      joinId: 'JoinId',
      name: 'Name',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityId: 'string',
      joinId: 'string',
      name: 'string',
      projectName: 'string',
      requestId: 'string',
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

