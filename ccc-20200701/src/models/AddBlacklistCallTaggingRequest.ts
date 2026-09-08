// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBlacklistCallTaggingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Contact Center instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The call ID. If the phone number is encrypted and contains asterisks (\\*), specify the JobId. This parameter is not required for unencrypted numbers.
   * 
   * @example
   * job-6582589278232****
   */
  jobId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1764590****
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

