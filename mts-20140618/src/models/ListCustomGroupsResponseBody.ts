// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomGroupsResponseBodyCustomGroupsCustomGroup extends $dara.Model {
  customGroupDescription?: string;
  /**
   * @example
   * 1
   */
  customGroupId?: string;
  customGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      customGroupDescription: 'CustomGroupDescription',
      customGroupId: 'CustomGroupId',
      customGroupName: 'CustomGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customGroupDescription: 'string',
      customGroupId: 'string',
      customGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomGroupsResponseBodyCustomGroups extends $dara.Model {
  customGroup?: ListCustomGroupsResponseBodyCustomGroupsCustomGroup[];
  static names(): { [key: string]: string } {
    return {
      customGroup: 'CustomGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customGroup: { 'type': 'array', 'itemType': ListCustomGroupsResponseBodyCustomGroupsCustomGroup },
    };
  }

  validate() {
    if(Array.isArray(this.customGroup)) {
      $dara.Model.validateArray(this.customGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomGroupsResponseBody extends $dara.Model {
  customGroups?: ListCustomGroupsResponseBodyCustomGroups;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 580e8ce3-3b80-44c5-9f3f-36ac3cc5bdd5
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customGroups: 'CustomGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customGroups: ListCustomGroupsResponseBodyCustomGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.customGroups && typeof (this.customGroups as any).validate === 'function') {
      (this.customGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

