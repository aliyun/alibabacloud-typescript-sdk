// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDepGroupTreeDataResponseBodyDataGroupDTOS } from "./GetDepGroupTreeDataResponseBodyDataGroupDtos";


export class GetDepGroupTreeDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10
   */
  depGroupId?: string;
  depGroupName?: string;
  groupDTOS?: GetDepGroupTreeDataResponseBodyDataGroupDTOS[];
  static names(): { [key: string]: string } {
    return {
      depGroupId: 'DepGroupId',
      depGroupName: 'DepGroupName',
      groupDTOS: 'GroupDTOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depGroupId: 'string',
      depGroupName: 'string',
      groupDTOS: { 'type': 'array', 'itemType': GetDepGroupTreeDataResponseBodyDataGroupDTOS },
    };
  }

  validate() {
    if(Array.isArray(this.groupDTOS)) {
      $dara.Model.validateArray(this.groupDTOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

