// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupClientsResponseBodyClients extends $dara.Model {
  /**
   * @remarks
   * The anti-ransomware client ID.
   * 
   * @example
   * c-000az2f537r73dyh****
   */
  clientId?: string;
  /**
   * @remarks
   * The status of the anti-ransomware client.
   * 
   * Valid values:
   * 
   * - **INSTALLING**: The client is being installed.
   * 
   * - **ONLINE**: The client is online.
   * 
   * - **UNINSTALLING**: The client is being uninstalled.
   * 
   * - **NOT_INSTALLED**: The client is not installed.
   * 
   * - **ACTIVATED**: The client is activated.
   * 
   * - **CLIENT_CONNECTION_ERROR**: A client connection error occurred.
   * 
   * @example
   * ONLINE
   */
  clientStatus?: string;
  /**
   * @remarks
   * The version number of the anti-ransomware client.
   * 
   * @example
   * 2.0.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The instance ID of the ECS instance that has the anti-ransomware client installed.
   * 
   * @example
   * i-bp15hyph4aci99dv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The UUID of the ECS instance that has the anti-ransomware client installed.
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
   * The anti-ransomware client information.
   */
  clients?: DescribeBackupClientsResponseBodyClients[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use the request ID to troubleshoot issues.
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

