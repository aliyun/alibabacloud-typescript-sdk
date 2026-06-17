// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolarClawDevicePairsResponseBodyPaired extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * cli
   */
  clientId?: string;
  /**
   * @remarks
   * The client mode.
   * 
   * @example
   * cli
   */
  clientMode?: string;
  /**
   * @remarks
   * The time when the device pairing was created, in Unix milliseconds.
   * 
   * @example
   * 1778659807727
   */
  createdAtMs?: number;
  /**
   * @remarks
   * The device family.
   * 
   * @example
   * empty
   */
  deviceFamily?: string;
  /**
   * @remarks
   * The unique device ID.
   * 
   * @example
   * f92620d6bea04f65d48cf603c57b367c97e837c1ab9f6d78f741f477e99d857c
   */
  deviceId?: string;
  /**
   * @remarks
   * The display name of the device.
   * 
   * @example
   * empty
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the device was last active, in Unix milliseconds.
   * 
   * @example
   * 1778659807727
   */
  lastSeenAtMs?: number;
  /**
   * @remarks
   * The operating system.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The device role.
   * 
   * @example
   * operator
   */
  role?: string;
  /**
   * @remarks
   * The list of permission scopes.
   */
  scopes?: string[];
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientMode: 'ClientMode',
      createdAtMs: 'CreatedAtMs',
      deviceFamily: 'DeviceFamily',
      deviceId: 'DeviceId',
      displayName: 'DisplayName',
      lastSeenAtMs: 'LastSeenAtMs',
      platform: 'Platform',
      role: 'Role',
      scopes: 'Scopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientMode: 'string',
      createdAtMs: 'number',
      deviceFamily: 'string',
      deviceId: 'string',
      displayName: 'string',
      lastSeenAtMs: 'number',
      platform: 'string',
      role: 'string',
      scopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolarClawDevicePairsResponseBodyPending extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * cli
   */
  clientId?: string;
  /**
   * @remarks
   * The client mode.
   * 
   * @example
   * cli
   */
  clientMode?: string;
  /**
   * @remarks
   * The device family.
   * 
   * @example
   * server
   */
  deviceFamily?: string;
  /**
   * @remarks
   * The unique device ID.
   * 
   * @example
   * device-784x37k0vko734fk
   */
  deviceId?: string;
  /**
   * @remarks
   * The display name of the device.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * Whether the request is to repair an existing pairing.
   * 
   * @example
   * false
   */
  isRepair?: boolean;
  /**
   * @remarks
   * The pairing request ID.
   * 
   * @example
   * test-1778647932986
   */
  pairRequestId?: string;
  /**
   * @remarks
   * The operating system.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The Ed25519 public key.
   * 
   * @example
   * test-pubkey-base64url
   */
  publicKey?: string;
  /**
   * @remarks
   * The requester\\"s remote IP address.
   * 
   * @example
   * 127.0.0.1
   */
  remoteIp?: string;
  /**
   * @remarks
   * The device role.
   * 
   * @example
   * operator
   */
  role?: string;
  /**
   * @remarks
   * The list of roles.
   */
  roles?: string[];
  /**
   * @remarks
   * The list of permission scopes.
   */
  scopes?: string[];
  /**
   * @remarks
   * Whether this is a silent pairing.
   * 
   * @example
   * false
   */
  silent?: boolean;
  /**
   * @remarks
   * The timestamp of the pairing request, in Unix milliseconds.
   * 
   * @example
   * 1778660347550
   */
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientMode: 'ClientMode',
      deviceFamily: 'DeviceFamily',
      deviceId: 'DeviceId',
      displayName: 'DisplayName',
      isRepair: 'IsRepair',
      pairRequestId: 'PairRequestId',
      platform: 'Platform',
      publicKey: 'PublicKey',
      remoteIp: 'RemoteIp',
      role: 'Role',
      roles: 'Roles',
      scopes: 'Scopes',
      silent: 'Silent',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientMode: 'string',
      deviceFamily: 'string',
      deviceId: 'string',
      displayName: 'string',
      isRepair: 'boolean',
      pairRequestId: 'string',
      platform: 'string',
      publicKey: 'string',
      remoteIp: 'string',
      role: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      scopes: { 'type': 'array', 'itemType': 'string' },
      silent: 'boolean',
      ts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolarClawDevicePairsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The status code of the response.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * A list of paired devices.
   */
  paired?: ListPolarClawDevicePairsResponseBodyPaired[];
  /**
   * @remarks
   * A list of pending pairing requests.
   */
  pending?: ListPolarClawDevicePairsResponseBodyPending[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      paired: 'Paired',
      pending: 'Pending',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      paired: { 'type': 'array', 'itemType': ListPolarClawDevicePairsResponseBodyPaired },
      pending: { 'type': 'array', 'itemType': ListPolarClawDevicePairsResponseBodyPending },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paired)) {
      $dara.Model.validateArray(this.paired);
    }
    if(Array.isArray(this.pending)) {
      $dara.Model.validateArray(this.pending);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

