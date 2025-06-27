// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAvailableAlertGroupsResponseBodyAlertGroupsAlertGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * @example
   * [\\"Default\\"]
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

