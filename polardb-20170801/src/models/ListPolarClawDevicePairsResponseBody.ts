// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolarClawDevicePairsResponseBodyPaired extends $dara.Model {
  /**
   * @example
   * cli
   */
  clientId?: string;
  /**
   * @example
   * cli
   */
  clientMode?: string;
  /**
   * @example
   * 1778659807727
   */
  createdAtMs?: number;
  /**
   * @example
   * empty
   */
  deviceFamily?: string;
  /**
   * @example
   * f92620d6bea04f65d48cf603c57b367c97e837c1ab9f6d78f741f477e99d857c
   */
  deviceId?: string;
  /**
   * @example
   * empty
   */
  displayName?: string;
  /**
   * @example
   * 1778659807727
   */
  lastSeenAtMs?: number;
  /**
   * @example
   * linux
   */
  platform?: string;
  /**
   * @example
   * operator
   */
  role?: string;
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
   * @example
   * cli
   */
  clientId?: string;
  /**
   * @example
   * cli
   */
  clientMode?: string;
  /**
   * @example
   * server
   */
  deviceFamily?: string;
  /**
   * @example
   * device-784x37k0vko734fk
   */
  deviceId?: string;
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * false
   */
  isRepair?: boolean;
  /**
   * @example
   * test-1778647932986
   */
  pairRequestId?: string;
  /**
   * @example
   * linux
   */
  platform?: string;
  /**
   * @example
   * test-pubkey-base64url
   */
  publicKey?: string;
  /**
   * @example
   * 127.0.0.1
   */
  remoteIp?: string;
  /**
   * @example
   * operator
   */
  role?: string;
  roles?: string[];
  scopes?: string[];
  /**
   * @example
   * false
   */
  silent?: boolean;
  /**
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
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  paired?: ListPolarClawDevicePairsResponseBodyPaired[];
  pending?: ListPolarClawDevicePairsResponseBodyPending[];
  /**
   * @remarks
   * Id of the request
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

