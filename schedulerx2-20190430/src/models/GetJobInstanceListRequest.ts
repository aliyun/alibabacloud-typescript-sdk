// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify a UNIX timestamp.
   * 
   * @example
   * 1684202400000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the **Namespace** page in the SchedulerX console.
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
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a UNIX timestamp.
   * 
   * @example
   * 1684116000000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The status of the job instance. Valid values:
   * 
   * 1: The job instance is pending. 3: The job instance is running. 4: The job instance is run. 5: The job instance fails. 9: The request for running the job instance is rejected. To specify this parameter, you must declare the following enumeration class: com.alibaba.schedulerx.common.domain.InstanceStatus.
   * 
   * @example
   * 5
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTimestamp: 'StartTimestamp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTimestamp: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

