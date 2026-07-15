// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDisableJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group. You can find this ID on the **Application Management** page in the console.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The IDs of the jobs to disable.
   * 
   * This parameter is required.
   * 
   * @example
   * 99341
   */
  jobIdList?: number[];
  /**
   * @remarks
   * The ID of the namespace that contains the jobs. You can find this ID on the **Namespaces** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is used only by specific third-party services.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region where the jobs are located.
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

