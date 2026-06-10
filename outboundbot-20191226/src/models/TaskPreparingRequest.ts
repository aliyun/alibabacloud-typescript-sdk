// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskPreparingRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 33040b9a-b04b-452f-b554-cd6f3a15f850
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the account that owns the instance.
   * 
   * @example
   * 1971226538081821
   */
  instanceOwnerId?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c9e42cd7-ba99-4872-9802-e05719ab051c
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceOwnerId: 'number',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

