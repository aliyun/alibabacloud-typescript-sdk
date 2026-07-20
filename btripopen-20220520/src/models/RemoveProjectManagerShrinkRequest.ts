// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveProjectManagerShrinkRequest extends $dara.Model {
  orgEntitiesShrink?: string;
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
      orgEntitiesShrink: 'org_entities',
      outProjectId: 'out_project_id',
      projectId: 'project_id',
      removeAll: 'remove_all',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgEntitiesShrink: 'string',
      outProjectId: 'string',
      projectId: 'number',
      removeAll: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

