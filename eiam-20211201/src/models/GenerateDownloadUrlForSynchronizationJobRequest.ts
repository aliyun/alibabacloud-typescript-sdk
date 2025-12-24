// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDownloadUrlForSynchronizationJobRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 同步任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * sync_000036q9p3jd5s18boeo2dvmmanu2086vxxxx
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

