// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveProjectManagerRequestOrgEntities extends $dara.Model {
  /**
   * @example
   * user1
   */
  entityId?: string;
  /**
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

export class RemoveProjectManagerRequest extends $dara.Model {
  orgEntities?: RemoveProjectManagerRequestOrgEntities[];
  /**
   * @example
   * projectabc
   */
  outProjectId?: string;
  /**
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @example
   * false
   */
  removeAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      orgEntities: 'org_entities',
      outProjectId: 'out_project_id',
      projectId: 'project_id',
      removeAll: 'remove_all',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgEntities: { 'type': 'array', 'itemType': RemoveProjectManagerRequestOrgEntities },
      outProjectId: 'string',
      projectId: 'number',
      removeAll: 'boolean',
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

