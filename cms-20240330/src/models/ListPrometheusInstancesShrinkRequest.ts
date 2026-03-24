// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of region IDs to filter by, separated by commas.
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
   * The maximum number of records to return.
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
   * The query token.
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
   * A list of instance IDs, separated by commas.
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
   * The instance name. Partial match is supported.
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
   * The resource group ID.
   * 
   * @example
   * rg-aek2bhocin5e2na
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type of the instance.
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
   * The list of tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The instance version. Valid values: V1 and V2.
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
      tagShrink: 'tag',
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
      tagShrink: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

