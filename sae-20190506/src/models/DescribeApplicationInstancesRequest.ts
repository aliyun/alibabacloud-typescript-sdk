// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d700e680-aa4d-4ec1-afc2-6566b5ff****
   */
  appId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the application group. Call the [DescribeApplicationGroups](https://help.aliyun.com/document_detail/126249.html) operation to get the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b2a8a925-477a-4ed7-b825-d5e22500****
   */
  groupId?: string;
  /**
   * @remarks
   * The application instance ID.
   * 
   * @example
   * demo-faaca66c-5959-45cc-b3bf-d26093b2e9c0******
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**. The value must be in the range (0, 1000000000).
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The batch ID. Call the [DescribeChangeOrder](https://help.aliyun.com/document_detail/126617.html) operation to get the ID.
   * 
   * @example
   * 85750d48-6cfc-4dbf-8ea0-840397******
   */
  pipelineId?: string;
  /**
   * @remarks
   * Specifies the sort order of the application instances. Instances are sorted first by running status, and then by instance ID. Valid values:
   * 
   * - **true**: The instances are sorted in descending order.
   * 
   * - **false**: The instances are sorted in ascending order.
   * 
   * Instance statuses in ascending order:
   * 
   * 1. **Error**: An error occurred during instance startup.
   * 
   * 2. **CrashLoopBackOff**: The container fails to start and enters a crash-restart loop.
   * 
   * 3. **ErrImagePull**: An error occurred while pulling the container image for the instance.
   * 
   * 4. **ImagePullBackOff**: The system is repeatedly trying and failing to pull the container image.
   * 
   * 5. **Pending**: The instance is waiting to be scheduled.
   * 
   * 6. **Unknown**: An unknown exception occurred.
   * 
   * 7. **Terminating**: The instance is being terminated.
   * 
   * 8. **NotFound**: The instance cannot be found.
   * 
   * 9. **PodInitializing**: The instance is being initialized.
   * 
   * 10. **Init:0/1**: The instance is being initialized.
   * 
   * 11. **Running**: The instance is running.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      pipelineId: 'PipelineId',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      groupId: 'string',
      instanceId: 'string',
      pageSize: 'number',
      pipelineId: 'string',
      reverse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

