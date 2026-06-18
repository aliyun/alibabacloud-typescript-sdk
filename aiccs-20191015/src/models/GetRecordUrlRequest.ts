// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001067****
   */
  acid?: string;
  /**
   * @remarks
   * The Artificial Intelligence Cloud Call Service (AICCS) instance ID. You can obtain it in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview) > Instance Management.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The call type. Valid values:
   * 
   * - **DUP_CALL**: Incoming and outgoing calls.
   * - **IVR_CALL**: IVR outbound call.
   * - **SMART_CALL**: Intelligent outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * DUP_CALL
   */
  recordType?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
      recordType: 'RecordType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
      recordType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

