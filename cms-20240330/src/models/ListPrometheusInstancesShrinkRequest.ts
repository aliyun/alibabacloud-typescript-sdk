// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The region IDs for filtering, separated by commas.
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
   * The instance IDs, separated by commas.
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
   * The instance name. Fuzzy match is supported.
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
   * The tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The instance version. Valid values:
   * - V1: V1 version.
   * - V2: V2 version.
   * 
   * @example
   * V2
   * 
   * **if can be null:**
   * true
   */
  version?: string;
  /**
   * @remarks
   * The workspace to which the instance belongs.
   * 
   * @example
   * workspace-test
   * 
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

