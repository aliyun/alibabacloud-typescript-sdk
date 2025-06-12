// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInstancesResponseBodyInstanceResponsesInstanceResponse extends $dara.Model {
  /**
   * @remarks
   * The error code returned for the instance. A return value of 200 indicates that the operation was successful. For more information, see the "Error codes" section of this topic.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The current status of the instance.
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
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The error message returned for the instance. The return value `success` indicates that the operation is successful. For more information, see the "Error codes" section of this topic.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The status of the instance before the operation was called.
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

