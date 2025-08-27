// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVscsResponseBodyVscsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key001
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value001
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

export class ListVscsResponseBodyVscs extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun node.
   * 
   * @example
   * e01-cn-fzh47xd7u08
   */
  nodeId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm2zkwhkns57i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The VSC status.
   * 
   * Valid values:
   * 
   * *   Creating
   * *   Normal
   * *   Deleting
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListVscsResponseBodyVscsTags[];
  /**
   * @remarks
   * The VSC ID.
   * 
   * @example
   * vsc-001
   */
  vscId?: string;
  /**
   * @remarks
   * The custom name of the VSC.
   * 
   * @example
   * test_name
   */
  vscName?: string;
  /**
   * @remarks
   * The VSC type. Valid values: primary and standard.
   * 
   * @example
   * primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vscId: 'VscId',
      vscName: 'VscName',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListVscsResponseBodyVscsTags },
      vscId: 'string',
      vscName: 'string',
      vscType: 'string',
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

export class ListVscsResponseBody extends $dara.Model {
  /**
   * @remarks
   * No response is returned. The TotalCount parameter is used.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * The token. It can be used in the next request to retrieve a new page of results. If this parameter is empty, no next page exists.
   * 
   * This parameter is required.
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 03668372-18FF-5959-98D9-6B36A4643C7A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of VSCs.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * The VSCs.
   */
  vscs?: ListVscsResponseBodyVscs[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vscs: 'Vscs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vscs: { 'type': 'array', 'itemType': ListVscsResponseBodyVscs },
    };
  }

  validate() {
    if(Array.isArray(this.vscs)) {
      $dara.Model.validateArray(this.vscs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

