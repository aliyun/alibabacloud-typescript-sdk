// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteActivationResponseBodyActivation extends $dara.Model {
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F1234****
   */
  activationId?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 2021-01-20T06:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The number of instances that were deregistered.
   * 
   * @example
   * 0
   */
  deregisteredCount?: number;
  /**
   * @remarks
   * The description of the activation code.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of times that the activation code can be used to register managed instances.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The default instance name prefix.
   * 
   * @example
   * test-InstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP addresses of the hosts that are allowed to use the activation code.
   * 
   * @example
   * 0.0.0.0/0
   */
  ipAddressRange?: string;
  /**
   * @remarks
   * The number of instances that were registered.
   * 
   * @example
   * 0
   */
  registeredCount?: number;
  /**
   * @remarks
   * The validity period of the activation code. Unit: hours.
   * 
   * @example
   * 4
   */
  timeToLiveInHours?: number;
  static names(): { [key: string]: string } {
    return {
      activationId: 'ActivationId',
      creationTime: 'CreationTime',
      deregisteredCount: 'DeregisteredCount',
      description: 'Description',
      instanceCount: 'InstanceCount',
      instanceName: 'InstanceName',
      ipAddressRange: 'IpAddressRange',
      registeredCount: 'RegisteredCount',
      timeToLiveInHours: 'TimeToLiveInHours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationId: 'string',
      creationTime: 'string',
      deregisteredCount: 'number',
      description: 'string',
      instanceCount: 'number',
      instanceName: 'string',
      ipAddressRange: 'string',
      registeredCount: 'number',
      timeToLiveInHours: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteActivationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the activation code and its usage information.
   */
  activation?: DeleteActivationResponseBodyActivation;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F74942176
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      activation: 'Activation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activation: DeleteActivationResponseBodyActivation,
      requestId: 'string',
    };
  }

  validate() {
    if(this.activation && typeof (this.activation as any).validate === 'function') {
      (this.activation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

