// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusViewsRequestTag extends $dara.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
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
   * @example
   * cn-zhangjiakou,cn-beijing
   */
  filterRegionIds?: string;
  /**
   * @example
   * 100
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @example
   * 44ANBjKZmQeKnaB1fXRq06w7sFYK3MUcCALMD9qQbmEiE
   * 
   * **if can be null:**
   * true
   */
  nextToken?: string;
  /**
   * @example
   * view-xxx
   */
  prometheusViewIds?: string;
  /**
   * @example
   * view1
   */
  prometheusViewName?: string;
  /**
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @example
   * PROMETHEUSVIEW
   */
  resourceType?: string;
  tag?: ListPrometheusViewsRequestTag[];
  /**
   * @example
   * V2
   */
  version?: string;
  /**
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

