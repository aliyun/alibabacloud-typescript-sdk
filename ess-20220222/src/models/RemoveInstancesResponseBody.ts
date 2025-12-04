// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstancesResponseBodyIgnoredInstances extends $dara.Model {
  code?: string;
  instanceId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInstancesResponseBody extends $dara.Model {
  ignoredInstances?: RemoveInstancesResponseBodyIgnoredInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scaling activity.
   * 
   * @example
   * asa-bp175o6f6ego3r2j****
   */
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoredInstances: 'IgnoredInstances',
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoredInstances: { 'type': 'array', 'itemType': RemoveInstancesResponseBodyIgnoredInstances },
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ignoredInstances)) {
      $dara.Model.validateArray(this.ignoredInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

