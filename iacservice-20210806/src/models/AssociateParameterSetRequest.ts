// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateParameterSetRequest extends $dara.Model {
  /**
   * @remarks
   * The list of parameter set IDs to associate with the resource. Maximum length: 5.
   * 
   * This parameter is required.
   */
  parameterSetIds?: string[];
  /**
   * @remarks
   * The resource ID. When the resource type is ModuleVersion, the value is a concatenation of <moduleId>-<moduleversion>, such as mod-34535345df123fr-v3.
   * 
   * This parameter is required.
   * 
   * @example
   * task-433aead756057ffdf5326bf1e12ed
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - Module: template
   * - ModuleVersion: template version
   * - Task: node
   * - Stack: resource stack.
   * 
   * This parameter is required.
   * 
   * @example
   * Task
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSetIds: 'parameterSetIds',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSetIds: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterSetIds)) {
      $dara.Model.validateArray(this.parameterSetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

