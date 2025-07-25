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

export class DescribeDomainGroupsResponseBodyDomainGroups extends $dara.Model {
  domainGroup?: DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup[];
  static names(): { [key: string]: string } {
    return {
      domainGroup: 'DomainGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroup: { 'type': 'array', 'itemType': DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup },
    };
  }

  validate() {
    if(Array.isArray(this.domainGroup)) {
      $dara.Model.validateArray(this.domainGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name groups.
   */
  domainGroups?: DescribeDomainGroupsResponseBodyDomainGroups;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainGroups: 'DomainGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroups: DescribeDomainGroupsResponseBodyDomainGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domainGroups && typeof (this.domainGroups as any).validate === 'function') {
      (this.domainGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

