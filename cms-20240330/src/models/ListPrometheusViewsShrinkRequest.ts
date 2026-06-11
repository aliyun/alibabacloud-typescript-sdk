// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusViewsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The region IDs by which to filter the results.
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
   * The IDs of the Prometheus view instances.
   * 
   * @example
   * view-xxx
   */
  prometheusViewIds?: string;
  /**
   * @remarks
   * The name of the Prometheus view.
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
  tagShrink?: string;
  /**
   * @remarks
   * The instance version. Valid values: V1 and V2.
   * 
   * @example
   * V2
   */
  version?: string;
  /**
   * @remarks
   * The name of the workspace.
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
      prometheusViewIds: 'string',
      prometheusViewName: 'string',
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

