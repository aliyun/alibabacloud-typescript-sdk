// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIvrTrackingSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-489361145506897920
   */
  contactId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0f7ad007-ab50-4b3d-a87a-56864eb40dab
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

