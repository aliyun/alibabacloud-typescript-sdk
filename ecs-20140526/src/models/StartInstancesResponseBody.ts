// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstancesResponseBodyInstanceResponsesInstanceResponse extends $dara.Model {
  code?: string;
  currentStatus?: string;
  instanceId?: string;
  message?: string;
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

