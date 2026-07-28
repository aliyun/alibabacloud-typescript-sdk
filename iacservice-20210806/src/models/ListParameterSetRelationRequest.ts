// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParameterSetRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource. For ModuleVersion, concatenate <moduleId>-<versionId>.
   * 
   * This parameter is required.
   * 
   * @example
   * mod-edf123fr-v3
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * - Module
   * - ModuleVersion
   * - Task
   * - SceneTestingTask
   * - Stack.
   * 
   * This parameter is required.
   * 
   * @example
   * Module
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

