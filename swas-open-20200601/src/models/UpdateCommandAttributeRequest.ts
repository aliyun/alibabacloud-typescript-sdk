// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCommandAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID. You can call the [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) operation to query all available command IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * c-sh02yh0932w****
   */
  commandId?: string;
  /**
   * @remarks
   * The description of the command. The description supports all character sets and can be up to 512 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the command. The name supports all character sets and can be up to 128 characters in length.
   * 
   * @example
   * testName
   */
  name?: string;
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
   * The maximum timeout period for the command execution on the ECS instance. Unit: seconds. When a command that you created cannot be run, the command execution times out. When the execution times out, the command process is forcefully terminated and the PID of the command is canceled. Default value: 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The working directory of the command. The directory can be up to 200 characters in length.
   * 
   * @example
   * /home/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      timeout: 'Timeout',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      timeout: 'number',
      workingDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

