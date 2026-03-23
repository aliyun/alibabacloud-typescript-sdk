// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInvocationResultsShrinkRequest extends $dara.Model {
  commandId?: string;
  /**
   * @example
   * PlainText
   */
  contentEncoding?: string;
  includeHistory?: boolean;
  instanceId?: string;
  invokeId?: string;
  /**
   * @example
   * Running
   */
  invokeRecordStatus?: string;
  maxResults?: number;
  nextToken?: string;
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
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  tagShrink?: string;
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
      tagShrink: 'Tag',
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
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

