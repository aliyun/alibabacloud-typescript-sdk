// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostCheckAdvicesRequestTagList extends $dara.Model {
  /**
   * @example
   * ecs_***_shanghai
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

export class DescribeCostCheckAdvicesRequest extends $dara.Model {
  assumeAliyunIdList?: number[];
  /**
   * @example
   * EcsCostLowUtilizationCheck
   */
  checkId?: string;
  checkPlanId?: number;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 6
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  regionIds?: string[];
  resourceGroupIdList?: string[];
  resourceId?: string;
  resourceIds?: string[];
  /**
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @example
   * 1
   */
  severity?: string;
  tagKeys?: string[];
  tagList?: DescribeCostCheckAdvicesRequestTagList[];
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdList: 'AssumeAliyunIdList',
      checkId: 'CheckId',
      checkPlanId: 'CheckPlanId',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      checkId: 'string',
      checkPlanId: 'number',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupIdList: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      severity: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      tagList: { 'type': 'array', 'itemType': DescribeCostCheckAdvicesRequestTagList },
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.assumeAliyunIdList)) {
      $dara.Model.validateArray(this.assumeAliyunIdList);
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

