// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud phone instance IDs. You can specify 1 to 200 instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The list of skill IDs. You can specify 1 to 10 skill IDs.
   */
  skillIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      skillIds: 'SkillIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      skillIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.skillIds)) {
      $dara.Model.validateArray(this.skillIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

