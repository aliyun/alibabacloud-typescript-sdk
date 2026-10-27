// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstructionRequest extends $dara.Model {
  /**
   * @remarks
   * The unique code for the instruction.
   * 
   * @example
   * Transfer00
   */
  code?: string;
  /**
   * @remarks
   * The configuration for the instruction, specified as a JSON string.
   * 
   * > - `providerId`: The ID of the live agent service provider. Call the `ListCallCenterProviders` operation to obtain this ID.
   * >
   * > - `transferMethod`: The method used for the transfer. Valid values: `BYE`, `BRIDGE`, and `REFER`.
   * >
   * > - `transferType`: The transfer destination type. Valid values: `External` (external number), `Agent` (agent), and `SkillGroup` (skill group).
   * >
   * > - `transferTarget`: The destination of the transfer, such as a phone number, an agent ID, or a skill group ID. The value of this parameter depends on the `transferType`.
   * >
   * > - `transferor`: The caller ID to display for the transfer. If this parameter is not specified, the caller\\"s original phone number is used.
   * >
   * > - `timeoutSeconds`: The timeout in seconds for transferring a call to an agent. Default: 30.
   * 
   * @example
   * {
   * 	"providerId": "xxxxxxxxx",
   * 	"transferMethod": "BYE",
   * 	"transferType": "External",
   * 	"transferTarget": "152******",
   * 	"transferor": "01*****",
   * 	"timeoutSeconds": "10"
   * }
   */
  config?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instruction.
   * 
   * @example
   * 转人工指令一
   */
  name?: string;
  /**
   * @remarks
   * The type of the instruction.
   * 
   * @example
   * TRANSFER
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      config: 'Config',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      config: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

