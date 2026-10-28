// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductDimensionGroupsResponseBodyDimensionGroups extends $dara.Model {
  /**
   * @remarks
   * The keys of the dimension group.
   */
  dimensionKeys?: string[];
  /**
   * @remarks
   * The code of the dimension group.
   * 
   * @example
   * entconsole_zjzp4d****
   */
  groupCode?: string;
  /**
   * @remarks
   * The name of the dimension group.
   * 
   * @example
   * Resource sharing
   */
  groupName?: string;
  /**
   * @remarks
   * The code of the Alibaba Cloud service.
   * 
   * @example
   * entconsole
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKeys: 'DimensionKeys',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKeys: { 'type': 'array', 'itemType': 'string' },
      groupCode: 'string',
      groupName: 'string',
      productCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensionKeys)) {
      $dara.Model.validateArray(this.dimensionKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductDimensionGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dimension groups.
   */
  dimensionGroups?: ListProductDimensionGroupsResponseBodyDimensionGroups[];
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 3
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position where the returned query results end. An empty value indicates that all data is returned.
   * 
   * @example
   * 21
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 057D210F-F2FC-5329-A536-26C16628BB09
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dimensionGroups: 'DimensionGroups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionGroups: { 'type': 'array', 'itemType': ListProductDimensionGroupsResponseBodyDimensionGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dimensionGroups)) {
      $dara.Model.validateArray(this.dimensionGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

