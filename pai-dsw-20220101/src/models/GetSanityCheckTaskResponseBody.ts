// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSanityCheckTaskResponseBodyCheckDetails extends $dara.Model {
  /**
   * @example
   * Check whether the security group allows traffic on port 22
   */
  description?: string;
  /**
   * @example
   * secureGroupCheck
   */
  name?: string;
  /**
   * @example
   * Port 22 is blocked by the security group
   */
  reason?: string;
  /**
   * @example
   * passed
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      reason: 'Reason',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      reason: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSanityCheckTaskResponseBody extends $dara.Model {
  checkDetails?: GetSanityCheckTaskResponseBodyCheckDetails[];
  /**
   * @example
   * SSH
   */
  checkType?: string;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  issues?: string[];
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * Executing
   */
  status?: string;
  /**
   * @example
   * 917479ff-c869-49ea-908e-ae85bd987bc0
   */
  taskId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 44FB0869-AA85-599D-A09D-C42F7467618A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkDetails: 'CheckDetails',
      checkType: 'CheckType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      issues: 'Issues',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDetails: { 'type': 'array', 'itemType': GetSanityCheckTaskResponseBodyCheckDetails },
      checkType: 'string',
      endTime: 'string',
      instanceId: 'string',
      issues: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkDetails)) {
      $dara.Model.validateArray(this.checkDetails);
    }
    if(Array.isArray(this.issues)) {
      $dara.Model.validateArray(this.issues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

