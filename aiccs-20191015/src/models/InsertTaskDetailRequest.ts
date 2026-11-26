// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The outbound call information.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"dnis":"1","memberId":1133,"memberName":"Test member","priority":10}]
   */
  callInfos?: string;
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID from the Artificial Intelligence Cloud Call Service console.
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
      callInfos: 'CallInfos',
      instanceId: 'InstanceId',
      outboundTaskId: 'OutboundTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfos: 'string',
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

