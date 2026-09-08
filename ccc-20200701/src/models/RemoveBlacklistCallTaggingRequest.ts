// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveBlacklistCallTaggingRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the Cloud Contact Center instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Call ID. Provide this field only for masked numbers (containing \\*). Do not provide it for unmasked numbers.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * Phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1312121****
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

