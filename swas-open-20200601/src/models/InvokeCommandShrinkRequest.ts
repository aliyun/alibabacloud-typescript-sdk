// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeCommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID. You can call the DescribeCommands operation to query all available command IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * c-sh02yh0932w****
   */
  commandId?: string;
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 50 IDs of simple application servers. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The key-value pairs of custom parameters to specify when the custom parameter feature is enabled.
   * 
   * *   You can specify up to 10 custom parameters. Each key in a Map collection cannot be an empty string and can be up to 64 characters in length.
   * *   Values in a Map collection can be empty strings. The total length of the custom parameters and the original command cannot exceed 18 KB after they are encoded in Base64.
   * *   The custom parameter names that you specify for the Parameters parameter must be included in the custom parameter names that you specified when you created the command.
   * *   You can use empty strings to represent the custom parameters that are not specified. If you want to disable the custom parameter feature, you can leave this parameter empty.
   * 
   * @example
   * {"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the user who runs the command in a simple application server. The username cannot exceed 255 characters in length.
   * 
   * *   For Linux servers, the default value is the root username.
   * *   For Windows servers, the default value is the system username.
   * 
   * You can change the user to run the command only for Linux simple application servers.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceIds: 'InstanceIds',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceIds: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

