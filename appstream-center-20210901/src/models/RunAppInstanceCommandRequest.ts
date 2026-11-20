// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAppInstanceCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group, which is used to execute commands in a single delivery group. You can call [ListAppInstanceGroup](~~ListAppInstanceGroup~~) to obtain the ID. This parameter is required if AppInstanceGroupIds is not specified. Otherwise, a parameter error is returned. This parameter does not take effect if AppInstanceGroupIds is specified.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The list of delivery group IDs, which is used to issue commands in batches to multiple delivery groups in the same region. The commands are executed on all persistent sessions in each delivery group in the list, and only one command execution ID is returned. A maximum of 100 delivery group IDs are supported, and duplicate IDs are deduplicated. All delivery groups must belong to the same region. Otherwise, InvalidRegion.NotMatch is returned. If any delivery group does not exist, InvalidAppInstanceGroup.NotFound is returned. When this parameter is specified, AppInstanceGroupId and AppInstancePersistentIds do not take effect.
   */
  appInstanceGroupIds?: string[];
  /**
   * @remarks
   * The ID of the persistent session, which is used to select a single persistent session in the delivery group specified by AppInstanceGroupId to execute commands. The session must belong to the specified delivery group. Otherwise, an error is returned.
   * 
   * @example
   * p-0cc7s3mw2fg4j****
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * The list of persistent session IDs, which is used to select multiple persistent sessions in the delivery group specified by AppInstanceGroupId to execute commands. A maximum of 100 IDs are supported. This parameter does not take effect when AppInstanceGroupIds is specified, and the commands are executed on all persistent sessions in each delivery group.
   */
  appInstancePersistentIds?: string[];
  /**
   * @remarks
   * The command content, which is the script content executed in the session. It must match the script type specified by RunScriptType.
   * 
   * This parameter is required.
   * 
   * @example
   * echo hello
   */
  commandContent?: string;
  /**
   * @remarks
   * The command parameters, which are passed through to the session execution end along with the command content. Whether to pass them and the specific format depend on the command content. You can leave this parameter empty if it is not required.
   * 
   * @example
   * {"name":"value"}
   */
  commandParam?: string;
  /**
   * @remarks
   * The command type. Currently, only CloudAssistantCmd (Cloud Assistant command) is supported. Specifying other values returns a parameter error.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudAssistantCmd
   */
  commandType?: string;
  /**
   * @remarks
   * The command description, which is used to describe the purpose of the issued command for subsequent identification.
   * 
   * @example
   * Clean up temporary files
   */
  description?: string;
  /**
   * @remarks
   * The product type. Currently, only WuyingServer (WUYING Workspace) is supported. Specifying other values returns a parameter error.
   * 
   * This parameter is required.
   * 
   * @example
   * WuyingServer
   */
  productType?: string;
  /**
   * @remarks
   * The type of the script to execute. Valid values:
   * - RunBatScript: bat script
   * - RunPowerShellScript: PowerShell script
   * - RunShellScript: shell script
   * - RunAIAgentScript: AI Agent script
   * 
   * @example
   * RunShellScript
   */
  runScriptType?: string;
  /**
   * @remarks
   * The timeout period for command execution, in seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupIds: 'AppInstanceGroupIds',
      appInstancePersistentId: 'AppInstancePersistentId',
      appInstancePersistentIds: 'AppInstancePersistentIds',
      commandContent: 'CommandContent',
      commandParam: 'CommandParam',
      commandType: 'CommandType',
      description: 'Description',
      productType: 'ProductType',
      runScriptType: 'RunScriptType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      appInstancePersistentId: 'string',
      appInstancePersistentIds: { 'type': 'array', 'itemType': 'string' },
      commandContent: 'string',
      commandParam: 'string',
      commandType: 'string',
      description: 'string',
      productType: 'string',
      runScriptType: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceGroupIds)) {
      $dara.Model.validateArray(this.appInstanceGroupIds);
    }
    if(Array.isArray(this.appInstancePersistentIds)) {
      $dara.Model.validateArray(this.appInstancePersistentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

