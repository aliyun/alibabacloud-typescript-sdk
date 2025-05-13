// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the job stops running. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1675739484000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The application group ID. You can obtain the application group ID on the Application Management page in the SchedulerX console.
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
   * 123
   */
  jobId?: string;
  /**
   * @remarks
   * The job instance ID.
   * 
   * @example
   * 123456
   */
  jobInstanceId?: string;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * ERROR
   */
  keyword?: string;
  /**
   * @remarks
   * The number of rows to return. The maximum number is 200.
   * 
   * @example
   * 50
   */
  line?: number;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespace page in the SchedulerX console.
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
   * The number of offset rows. This parameter can be used for a paged query.
   * 
   * @example
   * 0
   */
  offset?: number;
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
   * Specifies whether to reverse the order. By default, the order is reversed.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The time when the job starts to run. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1675739364000
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      groupId: 'GroupId',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      keyword: 'Keyword',
      line: 'Line',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      offset: 'Offset',
      regionId: 'RegionId',
      reverse: 'Reverse',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      groupId: 'string',
      jobId: 'string',
      jobInstanceId: 'string',
      keyword: 'string',
      line: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      offset: 'number',
      regionId: 'string',
      reverse: 'boolean',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

