// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-433aead7560571a87349d054b4
   */
  projectId?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - SceneTestingTask: scenario-based testing task.
   * - Task: regular task.
   * - Module: template.
   * 
   * @example
   * Task
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      projectId: 'projectId',
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

