// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAppInstanceCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group. This parameter is used to execute commands within a single delivery group. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID. If AppInstanceGroupIds is not specified, you must specify this parameter. Otherwise, a parameter error is returned. If AppInstanceGroupIds is specified, this parameter does not take effect.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The list of delivery group IDs. This parameter is used to issue commands in batches to multiple delivery groups in the same region. The command is executed on all persistent sessions in each delivery group in the list, and only one command execution ID is returned. You can specify up to 100 delivery group IDs. Duplicate IDs are automatically deduplicated. All delivery groups must belong to the same region. Otherwise, the InvalidRegion.NotMatch error is returned. If any delivery group does not exist, the InvalidAppInstanceGroup.NotFound error is returned. If this parameter is specified, AppInstanceGroupId and AppInstancePersistentIds do not take effect.
   */
  appInstanceGroupIds?: string[];
  /**
   * @remarks
   * The ID of the persistent session. This parameter is used to select a single persistent session within the delivery group specified by AppInstanceGroupId to execute the command. The session must belong to the specified delivery group. Otherwise, an error is returned.
   * 
   * @example
   * p-0cc7s3mw2fg4j****
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * The list of persistent session IDs. This parameter is used to select multiple persistent sessions within the delivery group specified by AppInstanceGroupId to execute the command. You can specify up to 100 session IDs. If AppInstanceGroupIds is specified, this parameter does not take effect, and the command is executed on all persistent sessions in each delivery group.
   */
  appInstancePersistentIds?: string[];
  /**
   * @remarks
   * The command content, which is the script content executed in the session. The content must match the script type specified by RunScriptType.
   * 
   * This parameter is required.
   * 
   * @example
   * echo hello
   */
  commandContent?: string;
  /**
   * @remarks
   * The command parameters, which are passed through to the session execution end along with the command content. Whether to specify this parameter and the specific format depend on the command content. If not required, you can leave this parameter empty.
   * 
   * @example
   * {"name":"value"}
   */
  commandParam?: string;
  /**
   * @remarks
   * The command type. Currently, only CloudAssistantCmd (Cloud Assistant command) is supported. Specifying other values results in a parameter error.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudAssistantCmd
   */
  commandType?: string;
  /**
   * @remarks
   * The description of the command. This parameter is used to describe the purpose of the issued command for subsequent identification.
   * 
   * @example
   * Clean up temporary files
   */
  description?: string;
  /**
   * @remarks
   * The product type. Currently, only WuyingServer (WUYING Workspace) is supported. Specifying other values results in a parameter error.
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
   * - RunBatScript: BAT script.
   * - RunPowerShellScript: PowerShell script.
   * - RunShellScript: Shell script.
   * - RunAIAgentScript: AI agent script.
   * 
   * @example
   * RunShellScript
   */
  runScriptType?: string;
  /**
   * @remarks
   * The timeout period for command execution, in seconds. If this parameter is not specified, the default value is 60 seconds.
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

