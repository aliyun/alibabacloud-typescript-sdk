// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvatarProjectRequest extends $dara.Model {
  projectIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      projectIdList: 'projectIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectIdList)) {
      $dara.Model.validateArray(this.projectIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

