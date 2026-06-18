// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineMessageLogRequest extends $dara.Model {
  /**
   * @remarks
   * Session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100****2077
   */
  acid?: string;
  /**
   * @remarks
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID. You can obtain it from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

