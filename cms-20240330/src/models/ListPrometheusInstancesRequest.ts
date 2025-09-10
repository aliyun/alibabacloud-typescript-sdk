// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstancesRequestTag extends $dara.Model {
  /**
   * @example
   * testKey
   */
  key?: string;
  /**
   * @example
   * testValue
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

export class ListPrometheusInstancesRequest extends $dara.Model {
  /**
   * @example
   * cn-shenzhen
   * 
   * **if can be null:**
   * true
   */
  filterRegionIds?: string;
  /**
   * @example
   * 10
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @example
   * xxxxxxxxxx
   * 
   * **if can be null:**
   * true
   */
  nextToken?: string;
  /**
   * @example
   * rw-00001,rw-00002,rw-00003
   * 
   * **if can be null:**
   * true
   */
  prometheusInstanceIds?: string;
  /**
   * @example
   * test
   * 
   * **if can be null:**
   * true
   */
  prometheusInstanceName?: string;
  /**
   * @example
   * rg-aek2bhocin5e2na
   */
  resourceGroupId?: string;
  /**
   * @example
   * Prometheus
   * 
   * **if can be null:**
   * true
   */
  resourceType?: string;
  tag?: ListPrometheusInstancesRequestTag[];
  /**
   * @example
   * V2
   * 
   * **if can be null:**
   * true
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      filterRegionIds: 'filterRegionIds',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      prometheusInstanceIds: 'prometheusInstanceIds',
      prometheusInstanceName: 'prometheusInstanceName',
      resourceGroupId: 'resourceGroupId',
      resourceType: 'resourceType',
      tag: 'tag',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterRegionIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      prometheusInstanceIds: 'string',
      prometheusInstanceName: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListPrometheusInstancesRequestTag },
      version: 'string',
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

