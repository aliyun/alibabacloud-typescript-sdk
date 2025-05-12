// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactSubscriptionTaskResultResponseBodyTaskResults extends $dara.Model {
  /**
   * @remarks
   * The end time of the subscription task.
   * 
   * @example
   * 1692756630000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-isj2wgaw4z9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test-reop
   */
  repoName?: string;
  /**
   * @remarks
   * The result of the task.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * The start time of the subscription task.
   * 
   * @example
   * 1691719501000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v2.0
   */
  tag?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * crast-wkpfwqozjiq****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
      tag: 'Tag',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      result: 'string',
      startTime: 'number',
      status: 'string',
      tag: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

