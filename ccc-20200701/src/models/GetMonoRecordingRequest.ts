// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMonoRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * Call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-6538214103689****
   */
  contactId?: string;
  /**
   * @remarks
   * Expiration time, in seconds.
   * 
   * @example
   * 300
   */
  expireSeconds?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      expireSeconds: 'ExpireSeconds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      expireSeconds: 'number',
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

