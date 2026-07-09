// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusViewsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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

export class ListPrometheusViewsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by region ID.
   * 
   * @example
   * cn-zhangjiakou,cn-beijing
   */
  filterRegionIds?: string;
  /**
   * @remarks
   * The maximum number of records to return.
   * 
   * @example
   * 100
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token.
   * 
   * @example
   * 44ANBjKZmQeKnaB1fXRq06w7sFYK3MUcCALMD9qQbmEiE
   * 
   * **if can be null:**
   * true
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of Prometheus view instance IDs.
   * 
   * @example
   * view-xxx
   */
  prometheusViewIds?: string;
  /**
   * @remarks
   * The Prometheus view name.
   * 
   * @example
   * view1
   */
  prometheusViewName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * PROMETHEUSVIEW
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListPrometheusViewsRequestTag[];
  /**
   * @remarks
   * The instance version: V1 or V2.
   * 
   * @example
   * V2
   */
  version?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      filterRegionIds: 'filterRegionIds',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      prometheusViewIds: 'prometheusViewIds',
      prometheusViewName: 'prometheusViewName',
      resourceGroupId: 'resourceGroupId',
      resourceType: 'resourceType',
      tag: 'tag',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterRegionIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      prometheusViewIds: 'string',
      prometheusViewName: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListPrometheusViewsRequestTag },
      version: 'string',
      workspace: 'string',
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

