// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProjectManagerRequestOrgEntities extends $dara.Model {
  /**
   * @remarks
   * The employee ID.
   * 
   * @example
   * user123
   */
  entityId?: string;
  /**
   * @remarks
   * Required. Currently only supports "1" (employee).
   * 
   * @example
   * 1
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProjectManagerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of manager group entities. Currently, entityType only supports "1" (employee). The maximum number is 10.
   */
  orgEntities?: AddProjectManagerRequestOrgEntities[];
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
      orgEntities: 'org_entities',
      outProjectId: 'out_project_id',
      projectId: 'project_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgEntities: { 'type': 'array', 'itemType': AddProjectManagerRequestOrgEntities },
      outProjectId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orgEntities)) {
      $dara.Model.validateArray(this.orgEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

