// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootInstancesResponseBodyInstanceResponsesInstanceResponse extends $dara.Model {
  /**
   * @remarks
   * The error code returned for the instance. A return value of 200 indicates that the operation is successful. For more information, see the "Error codes" section of this topic.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The current state of the instance.
   * 
   * @example
   * Stopping
   */
  currentStatus?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1g6zv0ce8oghu7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The error message that is returned for the operation on the instance. The return value Success indicates that the operation is successful. For more information, see the "Error codes" section of this topic.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The state of the instance before the operation is called.
   * 
   * @example
   * Running
   */
  previousStatus?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentStatus: 'CurrentStatus',
      instanceId: 'InstanceId',
      message: 'Message',
      previousStatus: 'PreviousStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentStatus: 'string',
      instanceId: 'string',
      message: 'string',
      previousStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

