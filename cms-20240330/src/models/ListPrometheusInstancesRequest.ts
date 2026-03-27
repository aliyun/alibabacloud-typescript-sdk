// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
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
   * @remarks
   * Specified list of regionIds to filter (comma-separated).
   * 
   * @example
   * cn-shenzhen
   * 
   * **if can be null:**
   * true
   */
  filterRegionIds?: string;
  /**
   * @remarks
   * Maximum number of records to return.
   * 
   * @example
   * 10
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token.
   * 
   * @example
   * xxxxxxxxxx
   * 
   * **if can be null:**
   * true
   */
  nextToken?: string;
  /**
   * @remarks
   * List of instance IDs (comma-separated)
   * 
   * @example
   * rw-00001,rw-00002,rw-00003
   * 
   * **if can be null:**
   * true
   */
  prometheusInstanceIds?: string;
  /**
   * @remarks
   * Instance name (partial match supported)
   * 
   * @example
   * test
   * 
   * **if can be null:**
   * true
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aek2bhocin5e2na
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource type of the instance.
   * 
   * @example
   * Prometheus
   * 
   * **if can be null:**
   * true
   */
  resourceType?: string;
  /**
   * @remarks
   * List of tags.
   */
  tag?: ListPrometheusInstancesRequestTag[];
  /**
   * @remarks
   * Instance version: V1 or V2
   * 
   * @example
   * V2
   * 
   * **if can be null:**
   * true
   */
  version?: string;
  /**
   * **if can be null:**
   * true
   */
  workspace?: string;
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
      workspace: 'workspace',
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

