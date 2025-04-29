// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeregisterManagedInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The activation code ID.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F7494****
   */
  activationId?: string;
  /**
   * @remarks
   * The version number of Cloud Assistant Agent.
   * 
   * @example
   * 2.2.0.102
   */
  agentVersion?: string;
  /**
   * @remarks
   * The hostname of the managed instance.
   * 
   * @example
   * test-Hostname
   */
  hostname?: string;
  /**
   * @remarks
   * The managed instance ID.
   * 
   * @example
   * mi-hz01axdfas****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the managed instance.
   * 
   * @example
   * test-InstanceName-001
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the managed instance.
   * 
   * @example
   * ``47.8.**.**``
   */
  internetIp?: string;
  /**
   * @remarks
   * The internal IP address of the managed instance.
   * 
   * @example
   * ``10.0.**.**``
   */
  intranetIp?: string;
  /**
   * @remarks
   * The number of times that Cloud Assistant tasks were executed on the managed instance.
   * 
   * @example
   * 2
   */
  invocationCount?: number;
  /**
   * @remarks
   * The time when the Cloud Assistant task was last executed.
   * 
   * @example
   * 2021-01-20T09:00:40Z
   */
  lastInvokedTime?: string;
  /**
   * @remarks
   * The machine code of the managed instance.
   * 
   * @example
   * e03231b37ab14e53b5795ad625fc****
   */
  machineId?: string;
  /**
   * @remarks
   * The operating system type of the managed instance.
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * The version information about the operating system.
   * 
   * @example
   * Linux_#38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021_x86_64
   */
  osVersion?: string;
  /**
   * @remarks
   * The time when the managed instance was registered.
   * 
   * @example
   * 2021-01-20T08:57:56Z
   */
  registrationTime?: string;
  /**
   * @remarks
   * The ID of the resource group to which the managed instance belongs.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      activationId: 'ActivationId',
      agentVersion: 'AgentVersion',
      hostname: 'Hostname',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      invocationCount: 'InvocationCount',
      lastInvokedTime: 'LastInvokedTime',
      machineId: 'MachineId',
      osType: 'OsType',
      osVersion: 'OsVersion',
      registrationTime: 'RegistrationTime',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationId: 'string',
      agentVersion: 'string',
      hostname: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      invocationCount: 'number',
      lastInvokedTime: 'string',
      machineId: 'string',
      osType: 'string',
      osVersion: 'string',
      registrationTime: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

