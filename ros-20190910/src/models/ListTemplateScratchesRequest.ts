// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTemplateScratchesRequestTags } from "./ListTemplateScratchesRequestTags";


export class ListTemplateScratchesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the scenario. Valid values:
   * 
   * *   GENERATE_IN_PROGRESS: The scenario is being created.
   * *   GENERATE_COMPLETE: The scenario is created.
   * *   GENERATE_FAILED: The scenario fails to be created.
   * 
   * @example
   * ["GENERATE_COMPLETE"]
   */
  status?: string;
  /**
   * @remarks
   * The tags of the scenario.
   */
  tags?: ListTemplateScratchesRequestTags[];
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The type of the resource scenario. Valid values:
   * 
   * *   ArchitectureReplication: resource replication
   * *   ArchitectureDetection: resource detection
   * *   ResourceImport: resource management
   * *   ResourceMigration: resource migration
   * 
   * @example
   * ArchitectureReplication
   */
  templateScratchType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      templateScratchId: 'TemplateScratchId',
      templateScratchType: 'TemplateScratchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTemplateScratchesRequestTags },
      templateScratchId: 'string',
      templateScratchType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

