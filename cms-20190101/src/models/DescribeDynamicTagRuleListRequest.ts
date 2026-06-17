// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDynamicTagRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dynamic tag rule.
   * 
   * @example
   * 004155fa-15ba-466d-b61a-***********
   */
  dynamicTagRuleId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Start value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Start value: 1. Default value: 30.
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
   * The region ID of the tag.
   * 
   * @example
   * cn-hangzhou
   */
  tagRegionId?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * For more information about how to obtain a tag value, see [DescribeTagValueList](https://help.aliyun.com/document_detail/145557.html).
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

