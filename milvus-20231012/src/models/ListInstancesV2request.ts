// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesV2RequestTag extends $dara.Model {
  /**
   * @example
   * k1
   */
  key?: string;
  /**
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListInstancesV2Request extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * c-123xxx
   */
  instanceId?: string;
  /**
   * @example
   * milvus-test
   */
  instanceName?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * None
   */
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
   * @example
   * rg-123xxx
   */
  resourceGroupId?: string;
  tag?: ListInstancesV2RequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListInstancesV2RequestTag },
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

