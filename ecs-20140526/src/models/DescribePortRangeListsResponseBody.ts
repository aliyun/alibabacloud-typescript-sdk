// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortRangeListsResponseBodyPortRangeListsTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * TestValue
   */
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

export class DescribePortRangeListsResponseBodyPortRangeLists extends $dara.Model {
  /**
   * @remarks
   * The number of associated resources.
   * 
   * @example
   * 1
   */
  associationCount?: number;
  /**
   * @remarks
   * The time when the port list was created.
   * 
   * @example
   * 2024-12-04T07:11Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the port list.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of entries in the port list.
   * 
   * @example
   * 20
   */
  maxEntries?: number;
  /**
   * @remarks
   * The ID of the port list.
   * 
   * @example
   * prl-2ze9743****
   */
  portRangeListId?: string;
  /**
   * @remarks
   * The name of the port list.
   * 
   * @example
   * PortRangeListNameSample
   */
  portRangeListName?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the port list.
   * 
   * @example
   * rg-2zeg82g****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the port list.
   */
  tags?: DescribePortRangeListsResponseBodyPortRangeListsTags[];
  static names(): { [key: string]: string } {
    return {
      associationCount: 'AssociationCount',
      creationTime: 'CreationTime',
      description: 'Description',
      maxEntries: 'MaxEntries',
      portRangeListId: 'PortRangeListId',
      portRangeListName: 'PortRangeListName',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationCount: 'number',
      creationTime: 'string',
      description: 'string',
      maxEntries: 'number',
      portRangeListId: 'string',
      portRangeListName: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribePortRangeListsResponseBodyPortRangeListsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortRangeListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. If the return value is empty, no more data is returned.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * Details of the port lists.
   */
  portRangeLists?: DescribePortRangeListsResponseBodyPortRangeLists[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6040AD98-11C3-5F78-9346-FCA8E9D8960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      portRangeLists: 'PortRangeLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      portRangeLists: { 'type': 'array', 'itemType': DescribePortRangeListsResponseBodyPortRangeLists },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portRangeLists)) {
      $dara.Model.validateArray(this.portRangeLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

