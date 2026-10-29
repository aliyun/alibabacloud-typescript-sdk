// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The region of the initiator of the VPC peering connection.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * pcc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values: **PeerConnection** (VPC peering connection).
   * 
   * @example
   * PeerConnection
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceJoshua
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      resourceId: 'string',
      resourceType: 'string',
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

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * - If **NextToken** is empty, no subsequent queries are available.
   * - If **NextToken** returns a value, the value indicates the token used to start the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE65F6B7-7566-4802-9007-96F2494AC512
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resources to which tags are bound.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

