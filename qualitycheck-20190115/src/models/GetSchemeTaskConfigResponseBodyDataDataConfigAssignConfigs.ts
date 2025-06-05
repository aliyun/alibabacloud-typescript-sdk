// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigsAssignConfigContests } from "./GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigsAssignConfigContests";


export class GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigs extends $dara.Model {
  assignConfigContests?: GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigsAssignConfigContests[];
  static names(): { [key: string]: string } {
    return {
      assignConfigContests: 'AssignConfigContests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigContests: { 'type': 'array', 'itemType': GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigsAssignConfigContests },
    };
  }

  validate() {
    if(Array.isArray(this.assignConfigContests)) {
      $dara.Model.validateArray(this.assignConfigContests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

