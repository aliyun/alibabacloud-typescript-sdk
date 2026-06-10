// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b3ea2a1-32b3-4041-842b-9bde5de9dda0
   */
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

