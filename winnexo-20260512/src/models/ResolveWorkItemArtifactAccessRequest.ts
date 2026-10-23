// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResolveWorkItemArtifactAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  artifactId?: string;
  /**
   * @remarks
   * The ID of the collaboration workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the work item.
   * 
   * This parameter is required.
   * 
   * @example
   * wi_example
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'artifactId',
      collaborationGroupId: 'collaborationGroupId',
      tenantId: 'tenantId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      collaborationGroupId: 'string',
      tenantId: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

