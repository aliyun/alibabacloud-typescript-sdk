// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostCheckAdvicesShrinkRequest extends $dara.Model {
  assumeAliyunIdListShrink?: string;
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
  regionIdsShrink?: string;
  resourceGroupIdListShrink?: string;
  resourceId?: string;
  resourceIdsShrink?: string;
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
  tagKeysShrink?: string;
  tagListShrink?: string;
  tagValuesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdListShrink: 'AssumeAliyunIdList',
      checkId: 'CheckId',
      checkPlanId: 'CheckPlanId',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      checkId: 'string',
      checkPlanId: 'number',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIdsShrink: 'string',
      resourceGroupIdListShrink: 'string',
      resourceId: 'string',
      resourceIdsShrink: 'string',
      resourceName: 'string',
      severity: 'string',
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

