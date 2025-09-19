// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventOperationStatusRequest extends $dara.Model {
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the alert events.
   * 
   * >  You must specify at least one of the TaskId and SecurityEventIds parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * ["909361"]
   */
  securityEventIds?: string[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the task that handles the alert events.
   * 
   * >  You must specify at least one of the TaskId and SecurityEventIds parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * 12121
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      securityEventIds: 'SecurityEventIds',
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityEventIds)) {
      $dara.Model.validateArray(this.securityEventIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

