// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventOperationStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the security alert events.
   * > You must specify either TaskId or SecurityEventIds. The API call succeeds only if one of these parameters is specified.
   * 
   * This parameter is required.
   */
  securityEventIds?: number[];
  /**
   * @remarks
   * The ID of the task that processes the security alert event.
   * 
   * > You must specify either TaskId or SecurityEventIds. The API call succeeds only if one of these parameters is specified.
   * 
   * This parameter is required.
   * 
   * @example
   * 12121
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      securityEventIds: 'SecurityEventIds',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventIds: { 'type': 'array', 'itemType': 'number' },
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

