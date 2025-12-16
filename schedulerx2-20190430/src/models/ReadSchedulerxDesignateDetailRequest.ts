// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxDesignateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The information type of the specified workers that you want to query. Valid values: 1 and 2.
   * 
   * 1: the IP address of the specified workers.
   * 2: the tags of the specified workers.
   * 
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @remarks
   * The ID of the application. You can obtain the application ID on the Applications page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * test.defalutGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID. You can obtain the ID on the Tasks page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * 368
   */
  jobId?: number;
  /**
   * @remarks
   * The unique identifier (UID) of the namespace. You can obtain the namespace UID on the Namespaces page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      designateType: 'DesignateType',
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateType: 'number',
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

