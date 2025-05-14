// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectFeatureEntityResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  /**
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

