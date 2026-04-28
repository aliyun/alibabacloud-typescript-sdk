// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostCheckResultsShrinkRequest extends $dara.Model {
  assumeAliyunIdListShrink?: string;
  checkIdsShrink?: string;
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
  regionIdsShrink?: string;
  resourceGroupIdListShrink?: string;
  resourceId?: string;
  resourceIdsShrink?: string;
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
  tagKeysShrink?: string;
  tagListShrink?: string;
  tagValuesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdListShrink: 'AssumeAliyunIdList',
      checkIdsShrink: 'CheckIds',
      checkPlanId: 'CheckPlanId',
      groupBy: 'GroupBy',
      language: 'Language',
      product: 'Product',
      regionIdsShrink: 'RegionIds',
      resourceGroupIdListShrink: 'ResourceGroupIdList',
      resourceId: 'ResourceId',
      resourceIdsShrink: 'ResourceIds',
      resourceName: 'ResourceName',
      severity: 'Severity',
      tagKeysShrink: 'TagKeys',
      tagListShrink: 'TagList',
      tagValuesShrink: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunIdListShrink: 'string',
      checkIdsShrink: 'string',
      checkPlanId: 'number',
      groupBy: 'string',
      language: 'string',
      product: 'string',
      regionIdsShrink: 'string',
      resourceGroupIdListShrink: 'string',
      resourceId: 'string',
      resourceIdsShrink: 'string',
      resourceName: 'string',
      severity: 'number',
      tagKeysShrink: 'string',
      tagListShrink: 'string',
      tagValuesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

