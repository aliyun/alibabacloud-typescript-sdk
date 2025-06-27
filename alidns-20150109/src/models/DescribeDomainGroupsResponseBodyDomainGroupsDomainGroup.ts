// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup extends $dara.Model {
  /**
   * @remarks
   * The number of domain name groups.
   * 
   * @example
   * 2
   */
  domainCount?: number;
  /**
   * @remarks
   * The ID of the domain name group. Valid values:
   * 
   * *   defaultGroup: the default group
   * *   If an empty string is returned, it indicates the group that contains all domain names.
   * 
   * @example
   * 2223
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the domain name group.
   * 
   * @example
   * MyGroup
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      groupId: 'string',
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

