// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * @example
   * 2daf4227f747cbf11a5501f18cc5e004
   */
  clientToken?: string;
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
   * - Module: template.
   * - SceneTestingTask: scenario-based testing task.
   * - Task: regular task.
   * 
   * @example
   * Task
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

