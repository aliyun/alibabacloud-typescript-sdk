// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostCheckResultsRequestTagList extends $dara.Model {
  /**
   * @example
   * ERP
   */
  tagKey?: string;
  tagValue?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValue)) {
      $dara.Model.validateArray(this.tagValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsRequest extends $dara.Model {
  assumeAliyunIdList?: number[];
  checkIds?: string[];
  checkPlanId?: number;
  /**
   * @example
   * Category
   */
  groupBy?: string;
  language?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  regionIds?: string[];
  resourceGroupIdList?: string[];
  resourceId?: string;
  resourceIds?: string[];
  /**
   * @example
   * SYNC_********_TASK
   */
  resourceName?: string;
  /**
   * @example
   * 1
   */
  severity?: number;
  tagKeys?: string[];
  tagList?: DescribeCostCheckResultsRequestTagList[];
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdList: 'AssumeAliyunIdList',
      checkIds: 'CheckIds',
      checkPlanId: 'CheckPlanId',
      groupBy: 'GroupBy',
      language: 'Language',
      product: 'Product',
      regionIds: 'RegionIds',
      resourceGroupIdList: 'ResourceGroupIdList',
      resourceId: 'ResourceId',
      resourceIds: 'ResourceIds',
      resourceName: 'ResourceName',
      severity: 'Severity',
      tagKeys: 'TagKeys',
      tagList: 'TagList',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunIdList: { 'type': 'array', 'itemType': 'number' },
      checkIds: { 'type': 'array', 'itemType': 'string' },
      checkPlanId: 'number',
      groupBy: 'string',
      language: 'string',
      product: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupIdList: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      severity: 'number',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      tagList: { 'type': 'array', 'itemType': DescribeCostCheckResultsRequestTagList },
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.assumeAliyunIdList)) {
      $dara.Model.validateArray(this.assumeAliyunIdList);
    }
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(Array.isArray(this.resourceGroupIdList)) {
      $dara.Model.validateArray(this.resourceGroupIdList);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

