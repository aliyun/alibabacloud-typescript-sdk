// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCommandRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is deprecated and does not take effect.
   * 
   * @example
   * echo
   */
  commandContent?: string;
  /**
   * @remarks
   * The command ID. You can call [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) to query all available command IDs.
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
   * The bootstrap program for script execution. The value can be up to 1 KB in length.
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
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The maximum timeout period for the command to run on ECS instances. Unit: seconds. If the command cannot be completed within the specified timeout period, the command process is forcefully terminated by canceling the PID of the command.
   * 
   * @example
   * 120
   */
  timeout?: number;
  /**
   * @remarks
   * The execution path. The path can be up to 200 characters in length.
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

