// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDeletionProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether stack deletion protection is enabled. Valid values:
   * 
   * *   Enabled: enables the stack deletion protection.
   * *   Disabled (default): Resource stack deletion protection is Disabled. You can use the console or API(DeleteStack) to release the stack resources.
   * 
   * >  The deletion of nested stacks is the same as the root stack.
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  deletionProtection?: string;
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
   * The delete protection attribute of a nested stack is determined by the root stack and remains unchanged from the root stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'string',
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

