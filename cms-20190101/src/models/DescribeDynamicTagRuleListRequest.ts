// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDynamicTagRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag rule.
   * 
   * @example
   * 004155fa-15ba-466d-b61a-***********
   */
  dynamicTagRuleId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Minimum value: 1. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * For more information about how to obtain a tag key, see [DescribeTagKeyList](https://help.aliyun.com/document_detail/145558.html).
   * 
   * @example
   * tagkey1
   */
  tagKey?: string;
  /**
   * @remarks
   * The ID of the region to which the tags belong.
   * 
   * @example
   * cn-hangzhou
   */
  tagRegionId?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * For more information about how to obtain a tag value, see [DescribeTagKeyList](https://help.aliyun.com/document_detail/145557.html).
   * 
   * @example
   * *
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTagRuleId: 'DynamicTagRuleId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tagKey: 'TagKey',
      tagRegionId: 'TagRegionId',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTagRuleId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      tagKey: 'string',
      tagRegionId: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

