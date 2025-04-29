// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableActivationResponseBodyActivation extends $dara.Model {
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
   * The number of instances that were deregistered.
   * 
   * @example
   * 2021-01-20T06:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The maximum number of times that the activation code can be used to register managed instances.
   * 
   * @example
   * 1
   */
  deregisteredCount?: number;
  /**
   * @remarks
   * The number of registered instances.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The IP addresses of the hosts that can use the activation code.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The description of the activation code.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * Indicates whether the activation code is disabled.
   * 
   * @example
   * test-InstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The validity period of the activation code. Unit: hours.
   * 
   * @example
   * 0.0.0.0/0
   */
  ipAddressRange?: string;
  /**
   * @remarks
   * The default prefix of the instance name.
   * 
   * @example
   * 1
   */
  registeredCount?: number;
  /**
   * @remarks
   * The activation code ID.
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
      disabled: 'Disabled',
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
      disabled: 'boolean',
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

