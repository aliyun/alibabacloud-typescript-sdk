// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCommandRequest extends $dara.Model {
  /**
   * @remarks
   * > **[Deprecated]** This parameter is deprecated. Specifying this parameter does not take effect.
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
   * The command description. It supports all character sets and can be up to 512 characters in length.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The bootstrap program for script execution. It can be up to 1 KB in length.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * The command name. It supports all character sets and can be up to 128 characters in length.
   * 
   * @example
   * test-CommandName
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The maximum timeout period for executing the command on an ECS instance, in seconds. If the command cannot be run and completed within the specified period, a timeout occurs. After a timeout occurs, the command process is forcibly terminated and the PID of the command is canceled.
   * 
   * @example
   * 120
   */
  timeout?: number;
  /**
   * @remarks
   * The execution path. It can be up to 200 characters in length.
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

