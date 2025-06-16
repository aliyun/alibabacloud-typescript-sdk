// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFailoverTestJobResponseBodyFailoverTestJobModel extends $dara.Model {
  /**
   * @remarks
   * The description of the failover test.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The duration of the failover test. Unit: minutes. Valid values: **1 to 4320**.
   * 
   * @example
   * 60
   */
  jobDuration?: string;
  /**
   * @remarks
   * The ID of the failover test.
   * 
   * @example
   * ftj-xxxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * Indicates whether the failover test is performed immediately. Valid values:
   * 
   * *   **StartNow**
   * *   **StartLater**
   * 
   * @example
   * StartNow
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the failover test.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The IDs of failover test resources.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of failover test resource. Only **PHYSICALCONNECTION** is returned.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time of the failover test. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-11-21T14:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the failover test. Valid values:
   * 
   * *   **Init**
   * *   **Starting**
   * *   **Testing**
   * *   **Stopping**
   * *   **Stopped**
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The end time of the failover test. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-11-21T15:00:00Z
   */
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      jobDuration: 'JobDuration',
      jobId: 'JobId',
      jobType: 'JobType',
      name: 'Name',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      jobDuration: 'string',
      jobId: 'string',
      jobType: 'string',
      name: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
      stopTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

