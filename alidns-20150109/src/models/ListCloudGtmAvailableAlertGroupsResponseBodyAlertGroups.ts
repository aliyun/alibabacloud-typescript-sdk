// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroupsAlertGroup } from "./ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroupsAlertGroup";


export class ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroups extends $dara.Model {
  alertGroup?: ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroupsAlertGroup[];
  static names(): { [key: string]: string } {
    return {
      alertGroup: 'AlertGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroup: { 'type': 'array', 'itemType': ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroupsAlertGroup },
    };
  }

  validate() {
    if(Array.isArray(this.alertGroup)) {
      $dara.Model.validateArray(this.alertGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

