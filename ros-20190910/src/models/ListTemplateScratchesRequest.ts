// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateScratchesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource scenario.
   * 
   * > Tags is optional. If you specify Tags, you must specify Tags.N.Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource scenario.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class ListTemplateScratchesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the resource scenario list.
   * 
   * Start value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Settings for paging.
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
   * The region ID of the resource scenario.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the resource scenario. Valid values:
   * 
   * - GENERATE_IN_PROGRESS: being generated.
   * - GENERATE_COMPLETE: generated.
   * - GENERATE_FAILED: failed to be generated.
   * 
   * @example
   * ["GENERATE_COMPLETE"]
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resource scenario.
   */
  tags?: ListTemplateScratchesRequestTags[];
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The type of the resource scenario. Valid values:
   * 
   * - ArchitectureReplication: resource replication.
   * 
   * - ArchitectureDetection: resource detection.
   * 
   * - ResourceImport: resource management.
   * 
   * - ResourceMigration: resource migration.
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

