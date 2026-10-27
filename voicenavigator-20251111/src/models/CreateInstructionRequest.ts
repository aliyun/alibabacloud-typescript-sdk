// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstructionRequest extends $dara.Model {
  /**
   * @remarks
   * The instruction code.
   * >Notice: Globally unique.</notice>
   * 
   * @example
   * Transfer00
   */
  code?: string;
  /**
   * @remarks
   * The instruction configuration.
   * 
   * > - providerId: the ID of the human agent service provider. You can obtain the ID by calling ListCallCenterProviders.
   * > - transferMethod: the transfer method. Valid values: BYE, BRIDGE, and REFER.
   * > - transferType: the transfer target type. Valid values: External (external number), Agent (agent), and SkillGroup (skill group).
   * > - transferTarget: the transfer target.
   * > - transferor: the caller number. If this parameter is left empty, the mobile phone number of the calling customer is used by default.
   * > - timeoutSeconds: the timeout period for transferring to a human agent, in seconds. Default value: 30.
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
   * The instance ID.
   * 
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @remarks
   * The instruction name.
   * 
   * @example
   * Transfer to human agent instruction 1
   */
  name?: string;
  /**
   * @remarks
   * The instruction type.
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

