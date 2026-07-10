// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProjectManagerShrinkRequest extends $dara.Model {
  orgEntitiesShrink?: string;
  outProjectId?: string;
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

