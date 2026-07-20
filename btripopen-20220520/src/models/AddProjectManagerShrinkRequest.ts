// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProjectManagerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of manager group entities. Currently, entityType only supports "1" (employee). The maximum number is 10.
   */
  orgEntitiesShrink?: string;
  /**
   * @remarks
   * The third-party project ID. You must specify at least one of project_id and out_project_id.
   * 
   * @example
   * projectabc
   */
  outProjectId?: string;
  /**
   * @remarks
   * The internal project ID. You must specify at least one of project_id and out_project_id.
   * 
   * @example
   * 123
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      orgEntitiesShrink: 'org_entities',
      outProjectId: 'out_project_id',
      projectId: 'project_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgEntitiesShrink: 'string',
      outProjectId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

