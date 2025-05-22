// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStackGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to which the stack group belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique in a region.
   * 
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

