// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunJobRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp of the job. Specify a string in the HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The time when the job stops running. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1645718400000
   */
  endDate?: number;
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
   * This parameter is required.
   * 
   * @example
   * 123
   */
  jobId?: number;
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
   * The time when the job starts to rerun. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1645459200000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endDate: 'EndDate',
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endDate: 'number',
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

