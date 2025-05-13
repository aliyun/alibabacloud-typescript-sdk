// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * DocTest.Group
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * helloword
   */
  jobName?: string;
  /**
   * @remarks
   * The ID of the namespace. You can obtain the namespace ID on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a72ecb1-b4cc-400a-a71b-20cdec9b****
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
  /**
   * @remarks
   * Specifies whether to enable the job. Valid values:
   * 
   * *   **0**: disables the job.
   * *   **1**: enables the job.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobName: 'JobName',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobName: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

