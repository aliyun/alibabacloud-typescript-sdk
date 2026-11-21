// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of region IDs used for filtering, separated by commas.
   * 
   * @example
   * cn-shenzhen
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
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
   * The next token.
   * 
   * @example
   * 11a111111111a1111a1111aaaa1a1aa1aa11aa111aa11a1111a1a111aa1a111111111a11a1aa1111a111aa11a11aa1a1
   * 
   * **if can be null:**
   * true
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of instance IDs, separated by commas.
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
   * The name of the instance. Partial match is supported.
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
   * The ID of the resource group.
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
   * 
   * @deprecated
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The version of the instance.
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

