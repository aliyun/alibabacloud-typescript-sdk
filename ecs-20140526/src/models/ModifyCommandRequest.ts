// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCommandRequest extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is no longer used and does not take effect.
   * 
   * @example
   * echo
   */
  commandContent?: string;
  /**
   * @remarks
   * The command ID. You can call the [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) operation to query all available command IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * c-hz01272yr52****
   */
  commandId?: string;
  /**
   * @remarks
   * The command description. The description supports all character sets and can be up to 512 characters in length.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The launcher for script execution. The value cannot exceed 1 KB in length.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * The command name. The name supports all character sets and can be up to 128 characters in length.
   * 
   * @example
   * test-CommandName
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the command. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum timeout period for the command to be run on the instance. Unit: seconds. When a command cannot run within the specified time range, the command times out. Then, the command process is forcibly terminated by canceling the process ID (PID) of the command.
   * 
   * @example
   * 120
   */
  timeout?: number;
  /**
   * @remarks
   * The working directory of the command. The value can be up to 200 characters in length.
   * 
   * @example
   * /home/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandId: 'CommandId',
      description: 'Description',
      launcher: 'Launcher',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timeout: 'Timeout',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandId: 'string',
      description: 'string',
      launcher: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

