// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelUpdateStackRequest extends $dara.Model {
  /**
   * @remarks
   * The method to cancel the update operation. Valid values:
   * 
   * *   Quick: cancels the update of a stack as soon as possible.
   * *   Safe: cancels the update of a stack as safely as possible.
   * 
   * @example
   * Safe
   */
  cancelType?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelType: 'CancelType',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelType: 'string',
      regionId: 'string',
      stackId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

