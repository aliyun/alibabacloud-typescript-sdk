// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSynchronizationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the synchronization job.
   * 
   * This parameter is required.
   * 
   * @example
   * sync_0000347vjovtcf41li0fgsd98gn24q9njxxxxx
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      synchronizationJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

