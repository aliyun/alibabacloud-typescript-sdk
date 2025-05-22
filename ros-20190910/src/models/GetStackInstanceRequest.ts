// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the Outputs parameter. The Outputs parameter specifies the outputs of the stack. Valid values:
   * 
   * *   Enabled: returns the Outputs parameter.
   * *   Disabled (default): does not return the Outputs parameter.
   * 
   * >  The Outputs parameter requires a long period of time to calculate. If you do not require the outputs of the stack, we recommend that you set OutputOption to Disabled to improve the response speed of the API operation.
   * 
   * @example
   * Disabled
   */
  outputOption?: string;
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
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The ID of the destination account to which the stack belongs.
   * 
   * *   If the stack group is granted self-managed permissions, the stack belongs to an Alibaba Cloud account.
   * *   If the stack group is granted service-managed permissions, the stack belongs to a member in a resource directory.
   * 
   * > For more information about the destination account, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 151266687691****
   */
  stackInstanceAccountId?: string;
  /**
   * @remarks
   * The region ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  stackInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      outputOption: 'OutputOption',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackInstanceAccountId: 'StackInstanceAccountId',
      stackInstanceRegionId: 'StackInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputOption: 'string',
      regionId: 'string',
      stackGroupName: 'string',
      stackInstanceAccountId: 'string',
      stackInstanceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

