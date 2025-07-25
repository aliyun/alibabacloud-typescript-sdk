// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstancesResponseBodyInstanceResponsesInstanceResponse extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned for the operation on the ECS instance. The value 200 indicates that the operation is successful. For more information, see the "Error codes" section in this topic.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status of the ECS instance after the operation is called.
   * 
   * @example
   * Starting
   */
  currentStatus?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The error message that is returned for the operation on the ECS instance. The value success indicates that the operation is successful. For more information, see the "Error codes" section in this topic.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The status of the ECS instance before the operation is called.
   * 
   * @example
   * Stopped
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

export class StartInstancesResponseBodyInstanceResponses extends $dara.Model {
  instanceResponse?: StartInstancesResponseBodyInstanceResponsesInstanceResponse[];
  static names(): { [key: string]: string } {
    return {
      instanceResponse: 'InstanceResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResponse: { 'type': 'array', 'itemType': StartInstancesResponseBodyInstanceResponsesInstanceResponse },
    };
  }

  validate() {
    if(Array.isArray(this.instanceResponse)) {
      $dara.Model.validateArray(this.instanceResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ECS instance, such as the status of each instance before and after the operation is called and the operation results.
   */
  instanceResponses?: StartInstancesResponseBodyInstanceResponses;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceResponses: 'InstanceResponses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResponses: StartInstancesResponseBodyInstanceResponses,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceResponses && typeof (this.instanceResponses as any).validate === 'function') {
      (this.instanceResponses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

