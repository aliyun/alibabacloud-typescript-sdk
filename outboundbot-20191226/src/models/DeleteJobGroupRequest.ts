// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteJobGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 8fa1953f-4a84-46d8-b80c-8ce9cf684fb3
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the job group.
   * 
   * This parameter is required.
   * 
   * @example
   * fc1fb484-4fe8-4031-b662-5b87ea88590b
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

