// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProjectManagerRequestOrgEntities extends $dara.Model {
  entityId?: string;
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
  orgEntities?: AddProjectManagerRequestOrgEntities[];
  outProjectId?: string;
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

