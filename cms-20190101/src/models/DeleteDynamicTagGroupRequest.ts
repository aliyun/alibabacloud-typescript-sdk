// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDynamicTagGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag rule.
   * 
   * For information about how to obtain the ID of a tag rule, see [DescribeDynamicTagRuleList](https://help.aliyun.com/document_detail/150126.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 6b882d9a-5117-42e2-9d0c-4749a0c6****
   */
  dynamicTagRuleId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTagRuleId: 'DynamicTagRuleId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTagRuleId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

