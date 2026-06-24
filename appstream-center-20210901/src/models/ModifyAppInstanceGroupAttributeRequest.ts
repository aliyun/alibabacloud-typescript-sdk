// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceGroupAttributeRequestNetworkDomainRules extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The policy value.
   * 
   * @example
   * block
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestNetwork extends $dara.Model {
  /**
   * @remarks
   * The domain name rule configurations.
   */
  domainRules?: ModifyAppInstanceGroupAttributeRequestNetworkDomainRules[];
  static names(): { [key: string]: string } {
    return {
      domainRules: 'DomainRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRules: { 'type': 'array', 'itemType': ModifyAppInstanceGroupAttributeRequestNetworkDomainRules },
    };
  }

  validate() {
    if(Array.isArray(this.domainRules)) {
      $dara.Model.validateArray(this.domainRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestNodePool extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent sessions, which is the number of sessions that can be simultaneously connected to a single resource. Too many simultaneous sessions may degrade the application experience. The valid value range varies by resource specification. You can call the ListNodeInstanceType operation to query the valid value range for each resource specification.
   * 
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-ew7va2g1wl3vm****
   */
  nodePoolId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeCapacity: 'NodeCapacity',
      nodePoolId: 'NodePoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCapacity: 'number',
      nodePoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestSecurityPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to reset after unbinding.
   * 
   * @example
   * true
   */
  resetAfterUnbind?: boolean;
  /**
   * @remarks
   * Specifies whether to skip user authorization verification.
   * 
   * @example
   * false
   */
  skipUserAuthCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      resetAfterUnbind: 'ResetAfterUnbind',
      skipUserAuthCheck: 'SkipUserAuthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resetAfterUnbind: 'boolean',
      skipUserAuthCheck: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfile extends $dara.Model {
  /**
   * @remarks
   * The ID of the user data storage system (NAS ID).
   * 
   * @example
   * 06ae94****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * Specifies whether to enable user data roaming.
   * 
   * @example
   * false
   */
  userProfileSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      userProfileSwitch: 'UserProfileSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      userProfileSwitch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfileFollow extends $dara.Model {
  fileSystemId?: string;
  profileFollowSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      profileFollowSwitch: 'ProfileFollowSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      profileFollowSwitch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequestStoragePolicy extends $dara.Model {
  /**
   * @remarks
   * The list of storage types.
   */
  storageTypeList?: string[];
  /**
   * @remarks
   * The user data roaming configuration.
   */
  userProfile?: ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfile;
  userProfileFollow?: ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfileFollow;
  static names(): { [key: string]: string } {
    return {
      storageTypeList: 'StorageTypeList',
      userProfile: 'UserProfile',
      userProfileFollow: 'UserProfileFollow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageTypeList: { 'type': 'array', 'itemType': 'string' },
      userProfile: ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfile,
      userProfileFollow: ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfileFollow,
    };
  }

  validate() {
    if(Array.isArray(this.storageTypeList)) {
      $dara.Model.validateArray(this.storageTypeList);
    }
    if(this.userProfile && typeof (this.userProfile as any).validate === 'function') {
      (this.userProfile as any).validate();
    }
    if(this.userProfileFollow && typeof (this.userProfileFollow as any).validate === 'function') {
      (this.userProfileFollow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group name.
   * 
   * @example
   * 办公应用
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The network configuration.
   * 
   * > To use this parameter, submit a ticket.
   */
  network?: ModifyAppInstanceGroupAttributeRequestNetwork;
  /**
   * @remarks
   * The resource group object.
   */
  nodePool?: ModifyAppInstanceGroupAttributeRequestNodePool;
  /**
   * @remarks
   * Specifies whether to allow only one application per session.
   * - If enabled, opening multiple applications within a delivery group allocates a separate session for each application, consuming more sessions.
   * 
   * @example
   * false
   */
  perSessionPerApp?: boolean;
  /**
   * @remarks
   * The AppId of the pre-open application. If the PreOpenMode parameter is set to `SINGLE_APP`, PreOpenAppId cannot be an empty string.
   * 
   * @example
   * ca-b2ronxxd****
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * The pre-open mode.
   * 
   * @example
   * OFF
   */
  preOpenMode?: string;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The security policy.
   */
  securityPolicy?: ModifyAppInstanceGroupAttributeRequestSecurityPolicy;
  /**
   * @remarks
   * The session retention duration after disconnection, in minutes. After an end user session is disconnected, the session is retained for the specified duration before being logged off. Set this parameter to `-1` to retain the session indefinitely. Valid values: -1 and 3 to 300. Default value: `15`.
   * 
   * @example
   * 15
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * The storage policy.
   */
  storagePolicy?: ModifyAppInstanceGroupAttributeRequestStoragePolicy;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      network: 'Network',
      nodePool: 'NodePool',
      perSessionPerApp: 'PerSessionPerApp',
      preOpenAppId: 'PreOpenAppId',
      preOpenMode: 'PreOpenMode',
      productType: 'ProductType',
      securityPolicy: 'SecurityPolicy',
      sessionTimeout: 'SessionTimeout',
      storagePolicy: 'StoragePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      network: ModifyAppInstanceGroupAttributeRequestNetwork,
      nodePool: ModifyAppInstanceGroupAttributeRequestNodePool,
      perSessionPerApp: 'boolean',
      preOpenAppId: 'string',
      preOpenMode: 'string',
      productType: 'string',
      securityPolicy: ModifyAppInstanceGroupAttributeRequestSecurityPolicy,
      sessionTimeout: 'number',
      storagePolicy: ModifyAppInstanceGroupAttributeRequestStoragePolicy,
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.nodePool && typeof (this.nodePool as any).validate === 'function') {
      (this.nodePool as any).validate();
    }
    if(this.securityPolicy && typeof (this.securityPolicy as any).validate === 'function') {
      (this.securityPolicy as any).validate();
    }
    if(this.storagePolicy && typeof (this.storagePolicy as any).validate === 'function') {
      (this.storagePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

