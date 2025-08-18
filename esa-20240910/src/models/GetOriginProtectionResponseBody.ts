// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginProtectionResponseBodyCurrentIPWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IP whitelist for origin protection used by the website, specified as IPv4 addresses or CIDR blocks.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The IP whitelist for origin protection used by the website, specified as IPv6 addresses or CIDR blocks.
   */
  IPv6?: string[];
  static names(): { [key: string]: string } {
    return {
      IPv4: 'IPv4',
      IPv6: 'IPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4: { 'type': 'array', 'itemType': 'string' },
      IPv6: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPv4)) {
      $dara.Model.validateArray(this.IPv4);
    }
    if(Array.isArray(this.IPv6)) {
      $dara.Model.validateArray(this.IPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyDiffIPWhitelistAddedIPWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IP whitelist for origin protection, specified as IPv4 addresses or CIDR blocks.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The IP whitelist for origin protection, specified as IPv6 addresses or CIDR blocks.
   */
  IPv6?: string[];
  static names(): { [key: string]: string } {
    return {
      IPv4: 'IPv4',
      IPv6: 'IPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4: { 'type': 'array', 'itemType': 'string' },
      IPv6: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPv4)) {
      $dara.Model.validateArray(this.IPv4);
    }
    if(Array.isArray(this.IPv6)) {
      $dara.Model.validateArray(this.IPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyDiffIPWhitelistNoChangeIpWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IP whitelist for origin protection, specified as IPv4 addresses or CIDR blocks.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The IP whitelist for origin protection, specified as IPv6 addresses or CIDR blocks.
   */
  IPv6?: string[];
  static names(): { [key: string]: string } {
    return {
      IPv4: 'IPv4',
      IPv6: 'IPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4: { 'type': 'array', 'itemType': 'string' },
      IPv6: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPv4)) {
      $dara.Model.validateArray(this.IPv4);
    }
    if(Array.isArray(this.IPv6)) {
      $dara.Model.validateArray(this.IPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyDiffIPWhitelistRemovedIPWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IP whitelist for origin protection, specified as IPv4 addresses or CIDR blocks.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The IP whitelist for origin protection, specified as IPv6 addresses or CIDR blocks.
   */
  IPv6?: string[];
  static names(): { [key: string]: string } {
    return {
      IPv4: 'IPv4',
      IPv6: 'IPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4: { 'type': 'array', 'itemType': 'string' },
      IPv6: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPv4)) {
      $dara.Model.validateArray(this.IPv4);
    }
    if(Array.isArray(this.IPv6)) {
      $dara.Model.validateArray(this.IPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyDiffIPWhitelist extends $dara.Model {
  /**
   * @remarks
   * The new IP whitelist for origin protection.
   */
  addedIPWhitelist?: GetOriginProtectionResponseBodyDiffIPWhitelistAddedIPWhitelist;
  /**
   * @remarks
   * The IP whitelist for origin protection that remains unchanged.
   */
  noChangeIpWhitelist?: GetOriginProtectionResponseBodyDiffIPWhitelistNoChangeIpWhitelist;
  /**
   * @remarks
   * The IP whitelist for origin protection that has been deleted.
   */
  removedIPWhitelist?: GetOriginProtectionResponseBodyDiffIPWhitelistRemovedIPWhitelist;
  static names(): { [key: string]: string } {
    return {
      addedIPWhitelist: 'AddedIPWhitelist',
      noChangeIpWhitelist: 'NoChangeIpWhitelist',
      removedIPWhitelist: 'RemovedIPWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedIPWhitelist: GetOriginProtectionResponseBodyDiffIPWhitelistAddedIPWhitelist,
      noChangeIpWhitelist: GetOriginProtectionResponseBodyDiffIPWhitelistNoChangeIpWhitelist,
      removedIPWhitelist: GetOriginProtectionResponseBodyDiffIPWhitelistRemovedIPWhitelist,
    };
  }

  validate() {
    if(this.addedIPWhitelist && typeof (this.addedIPWhitelist as any).validate === 'function') {
      (this.addedIPWhitelist as any).validate();
    }
    if(this.noChangeIpWhitelist && typeof (this.noChangeIpWhitelist as any).validate === 'function') {
      (this.noChangeIpWhitelist as any).validate();
    }
    if(this.removedIPWhitelist && typeof (this.removedIPWhitelist as any).validate === 'function') {
      (this.removedIPWhitelist as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyLatestIPWhitelist extends $dara.Model {
  /**
   * @remarks
   * The latest IP whitelist for origin protection, specified as IPv4 addresses or CIDR blocks.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The latest IP whitelist for origin protection, specified as IPv6 addresses or CIDR blocks.
   */
  IPv6?: string[];
  static names(): { [key: string]: string } {
    return {
      IPv4: 'IPv4',
      IPv6: 'IPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4: { 'type': 'array', 'itemType': 'string' },
      IPv6: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPv4)) {
      $dara.Model.validateArray(this.IPv4);
    }
    if(Array.isArray(this.IPv6)) {
      $dara.Model.validateArray(this.IPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP whitelist for origin protection used by the website.
   */
  currentIPWhitelist?: GetOriginProtectionResponseBodyCurrentIPWhitelist;
  /**
   * @remarks
   * The IP whitelist for origin protection that has been updated.
   */
  diffIPWhitelist?: GetOriginProtectionResponseBodyDiffIPWhitelist;
  /**
   * @remarks
   * The latest IP whitelist for origin protection.
   */
  latestIPWhitelist?: GetOriginProtectionResponseBodyLatestIPWhitelist;
  /**
   * @remarks
   * Indicates whether the IP whitelist for origin protection needs to be updated. If the currently used IP whitelist is different from the latest IP whitelist, it needs to be updated, and the value is true.
   * 
   * *   true: The update is required.
   * *   false: No update is required.
   * 
   * @example
   * true
   */
  needUpdate?: boolean;
  /**
   * @remarks
   * Indicates whether IP convergence is enabled.
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  originConverge?: string;
  /**
   * @remarks
   * Indicates whether origin protection is enabled.
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  originProtection?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      currentIPWhitelist: 'CurrentIPWhitelist',
      diffIPWhitelist: 'DiffIPWhitelist',
      latestIPWhitelist: 'LatestIPWhitelist',
      needUpdate: 'NeedUpdate',
      originConverge: 'OriginConverge',
      originProtection: 'OriginProtection',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentIPWhitelist: GetOriginProtectionResponseBodyCurrentIPWhitelist,
      diffIPWhitelist: GetOriginProtectionResponseBodyDiffIPWhitelist,
      latestIPWhitelist: GetOriginProtectionResponseBodyLatestIPWhitelist,
      needUpdate: 'boolean',
      originConverge: 'string',
      originProtection: 'string',
      requestId: 'string',
      siteId: 'number',
    };
  }

  validate() {
    if(this.currentIPWhitelist && typeof (this.currentIPWhitelist as any).validate === 'function') {
      (this.currentIPWhitelist as any).validate();
    }
    if(this.diffIPWhitelist && typeof (this.diffIPWhitelist as any).validate === 'function') {
      (this.diffIPWhitelist as any).validate();
    }
    if(this.latestIPWhitelist && typeof (this.latestIPWhitelist as any).validate === 'function') {
      (this.latestIPWhitelist as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

