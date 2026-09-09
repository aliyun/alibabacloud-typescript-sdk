// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCrossProjectPipelineRunRequest extends $dara.Model {
  /**
   * @remarks
   * The cross-workspace deployment environment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 101
   */
  deploymentEnvironmentId?: number;
  /**
   * @remarks
   * The deployment description.
   * 
   * @example
   * This is a business process created through the API
   */
  description?: string;
  /**
   * @remarks
   * The list of top-level object IDs from the source project to deploy. The list must contain exactly one object. Child objects of composite objects such as workflows are automatically included by the system.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1"]
   */
  objectIds?: string[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - Offline: Offline deployment.
   * - Online: Online deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * Online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentEnvironmentId: 'DeploymentEnvironmentId',
      description: 'Description',
      objectIds: 'ObjectIds',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentEnvironmentId: 'number',
      description: 'string',
      objectIds: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectIds)) {
      $dara.Model.validateArray(this.objectIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

