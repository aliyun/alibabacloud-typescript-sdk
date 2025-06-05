// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecContainerCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The commands to run in the container. You can specify up to 20 commands. Each command can be up to 256 characters in length.\\
   * The strings must be in the JSON format. Example: `["/bin/sh", "-c", "ls -a"]`.
   * 
   * This parameter is required.
   * 
   * @example
   * ["/bin/sh", "-c", "ls -a"]
   */
  command?: string;
  /**
   * @remarks
   * The ID of the elastic container instance.
   * 
   * This parameter is required.
   * 
   * @example
   * eci-2zebxkiifulhl****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * This parameter is required.
   * 
   * @example
   * nginx
   */
  containerName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
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
   * Specifies whether to read the commands from standard input (stdin). Default value: true.
   * 
   * @example
   * true
   */
  stdin?: boolean;
  /**
   * @remarks
   * Specifies whether to immediately run the command and synchronously return the result. Default value: false.\\
   * If this parameter is set to true, TTY must be set to false. Command cannot be set to `/bin/bash`.
   * 
   * @example
   * false
   */
  sync?: boolean;
  /**
   * @remarks
   * Specifies whether to enable interaction. Default value: false.\\
   * If the Command parameter is set to `/bin/bash`, set this parameter to true.
   * 
   * @example
   * false
   */
  TTY?: boolean;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      containerGroupId: 'ContainerGroupId',
      containerName: 'ContainerName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stdin: 'Stdin',
      sync: 'Sync',
      TTY: 'TTY',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      containerGroupId: 'string',
      containerName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stdin: 'boolean',
      sync: 'boolean',
      TTY: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

