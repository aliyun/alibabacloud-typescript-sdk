// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadAudioDataParamsRequest extends $dara.Model {
  /**
   * @remarks
   * Call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-38860977107324****
   */
  contactId?: string;
  /**
   * @remarks
   * Cloud Contact Center instance ID.
   * 
   * @example
   * test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
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

