// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInvocationResultsRequestTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInvocationResultsRequest extends $dara.Model {
  /**
   * @example
   * c-7d2a745b412b4601b2d47f6a768d****
   */
  commandId?: string;
  /**
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @example
   * false
   */
  includeHistory?: boolean;
  /**
   * @example
   * rc-i322y2t562oh7o******
   */
  instanceId?: string;
  /**
   * @example
   * t-7d2a745b412b4601b2d47f6a768d****
   */
  invokeId?: string;
  /**
   * @example
   * Running
   */
  invokeRecordStatus?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @example
   * None
   */
  pageNumber?: number;
  /**
   * @example
   * None
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmx****
   */
  resourceGroupId?: string;
  tag?: DescribeRCInvocationResultsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      contentEncoding: 'ContentEncoding',
      includeHistory: 'IncludeHistory',
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
      invokeRecordStatus: 'InvokeRecordStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      contentEncoding: 'string',
      includeHistory: 'boolean',
      instanceId: 'string',
      invokeId: 'string',
      invokeRecordStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeRCInvocationResultsRequestTag },
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

