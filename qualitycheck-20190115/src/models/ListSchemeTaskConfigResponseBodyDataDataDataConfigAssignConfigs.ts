// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig } from "./ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig";


export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs extends $dara.Model {
  assignConfig?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig[];
  static names(): { [key: string]: string } {
    return {
      assignConfig: 'AssignConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfig: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig },
    };
  }

  validate() {
    if(Array.isArray(this.assignConfig)) {
      $dara.Model.validateArray(this.assignConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

