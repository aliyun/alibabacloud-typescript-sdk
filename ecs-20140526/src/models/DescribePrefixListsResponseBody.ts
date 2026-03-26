// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrefixListsResponseBodyPrefixListsPrefixListTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListsResponseBodyPrefixListsPrefixListTags extends $dara.Model {
  tag?: DescribePrefixListsResponseBodyPrefixListsPrefixListTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribePrefixListsResponseBodyPrefixListsPrefixListTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListsResponseBodyPrefixListsPrefixList extends $dara.Model {
  addressFamily?: string;
  associationCount?: number;
  creationTime?: string;
  description?: string;
  maxEntries?: number;
  prefixListId?: string;
  prefixListName?: string;
  resourceGroupId?: string;
  tags?: DescribePrefixListsResponseBodyPrefixListsPrefixListTags;
  static names(): { [key: string]: string } {
    return {
      addressFamily: 'AddressFamily',
      associationCount: 'AssociationCount',
      creationTime: 'CreationTime',
      description: 'Description',
      maxEntries: 'MaxEntries',
      prefixListId: 'PrefixListId',
      prefixListName: 'PrefixListName',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFamily: 'string',
      associationCount: 'number',
      creationTime: 'string',
      description: 'string',
      maxEntries: 'number',
      prefixListId: 'string',
      prefixListName: 'string',
      resourceGroupId: 'string',
      tags: DescribePrefixListsResponseBodyPrefixListsPrefixListTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListsResponseBodyPrefixLists extends $dara.Model {
  prefixList?: DescribePrefixListsResponseBodyPrefixListsPrefixList[];
  static names(): { [key: string]: string } {
    return {
      prefixList: 'PrefixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixList: { 'type': 'array', 'itemType': DescribePrefixListsResponseBodyPrefixListsPrefixList },
    };
  }

  validate() {
    if(Array.isArray(this.prefixList)) {
      $dara.Model.validateArray(this.prefixList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token that is returned in this call. If the return value is empty, no more data is returned.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  prefixLists?: DescribePrefixListsResponseBodyPrefixLists;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 38793DB8-A4B2-4AEC-BFD3-111234E9188D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      prefixLists: 'PrefixLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      prefixLists: DescribePrefixListsResponseBodyPrefixLists,
      requestId: 'string',
    };
  }

  validate() {
    if(this.prefixLists && typeof (this.prefixLists as any).validate === 'function') {
      (this.prefixLists as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

