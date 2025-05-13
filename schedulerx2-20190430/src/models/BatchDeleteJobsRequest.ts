// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job IDs. Separate multiple job IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 99341
   */
  jobIdList?: number[];
  /**
   * @remarks
   * The ID of the namespace to which the job belongs. You can obtain the ID of the namespace on the **Namespace** page in the SchedulerX console.
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
   * Schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region to which the job belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobIdList: 'JobIdList',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobIdList)) {
      $dara.Model.validateArray(this.jobIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

