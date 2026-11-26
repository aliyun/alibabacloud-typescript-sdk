// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the Artificial Intelligence Cloud Call Service (AICCS) instance. You can obtain instance ID from the AICCS console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the outbound task.
   * 
   * This parameter is required.
   * 
   * @example
   * 120001
   */
  outboundTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

