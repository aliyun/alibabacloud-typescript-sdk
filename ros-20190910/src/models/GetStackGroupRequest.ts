// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * > You must specify only one of the StackGroupName and StackGroupId parameters.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region. The name can be up to 255 characters in length, and must start with a digit or a letter. It can contain digits, letters, hyphens (-), and underscores (_).
   * 
   * > You must specify only one of the StackGroupName and StackGroupId parameters.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupId: 'string',
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

