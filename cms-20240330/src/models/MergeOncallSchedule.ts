// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeOncallSchedule extends $dara.Model {
  detail?: { [key: string]: any };
  gmtCreate?: string;
  gmtModified?: string;
  identifier?: string;
  name?: string;
  source?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      name: 'name',
      source: 'source',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      identifier: 'string',
      name: 'string',
      source: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

