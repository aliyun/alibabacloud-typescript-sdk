// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupClientsResponseBodyClients extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware agent.
   * 
   * @example
   * c-000az2f537r73dyh****
   */
  clientId?: string;
  /**
   * @remarks
   * The status of the anti-ransomware agent.
   * 
   * Valid values:
   * 
   * *   **INSTALLING**: The agent is being installed.
   * *   **ONLINE**: The agent is online.
   * *   **UNINSTALLING**: The agent is being uninstalled.
   * *   **NOT_INSTALLED**: The agent is not installed.
   * *   **ACTIVATED**: The agent is enabled.
   * *   **CLIENT_CONNECTION_ERROR**: A connection error occurs on the agent.
   * 
   * @example
   * ONLINE
   */
  clientStatus?: string;
  /**
   * @remarks
   * The version of the anti-ransomware agent.
   * 
   * @example
   * 2.0.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The ID of the ECS instance on which the anti-ransomware agent is installed.
   * 
   * @example
   * i-bp15hyph4aci99dv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The UUID of the Elastic Compute Service (ECS) instance on which the anti-ransomware agent is installed.
   * 
   * @example
   * 22f6550d-f294-449b-b6e6-90638fd1****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientStatus: 'ClientStatus',
      clientVersion: 'ClientVersion',
      instanceId: 'InstanceId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientStatus: 'string',
      clientVersion: 'string',
      instanceId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the information about the anti-ransomware agent.
   */
  clients?: DescribeBackupClientsResponseBodyClients[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * E3ED094C-9EB7-4239-962B-D0FB3D5F23C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': DescribeBackupClientsResponseBodyClients },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

