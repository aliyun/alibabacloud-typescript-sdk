// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCrossProjectPipelineRunShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cross-workspace deployment environment.
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
   * This is a workflow created by calling the API operation
   */
  description?: string;
  /**
   * @remarks
   * The list of top-level object IDs from the source project to be deployed. The list must contain exactly one object. Sub-objects of composite objects such as workflows are automatically included by the system.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1"]
   */
  objectIdsShrink?: string;
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
   * The deployment type.
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
      objectIdsShrink: 'ObjectIds',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentEnvironmentId: 'number',
      description: 'string',
      objectIdsShrink: 'string',
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

