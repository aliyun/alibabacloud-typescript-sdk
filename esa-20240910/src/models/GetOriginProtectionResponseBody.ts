// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginProtectionResponseBodyCurrentIPWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IPv4 addresses or CIDR blocks in the back-to-origin IP address whitelist that the site currently uses.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The IPv6 addresses or CIDR blocks in the back-to-origin IP address whitelist that the site currently uses.
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
   * The IPv4 addresses or CIDR blocks in the back-to-origin IP address whitelist.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The IPv6 addresses or CIDR blocks in the back-to-origin IP address whitelist.
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
   * The IPv4 addresses or CIDR blocks in the back-to-origin IP address whitelist.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The IPv6 addresses or CIDR blocks in the back-to-origin IP address whitelist.
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
   * The IPv4 addresses or CIDR blocks in the back-to-origin IP address whitelist.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The IPv6 addresses or CIDR blocks in the back-to-origin IP address whitelist.
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
   * The added back-to-origin IP address whitelist.
   */
  addedIPWhitelist?: GetOriginProtectionResponseBodyDiffIPWhitelistAddedIPWhitelist;
  /**
   * @remarks
   * The unchanged back-to-origin IP address whitelist.
   */
  noChangeIpWhitelist?: GetOriginProtectionResponseBodyDiffIPWhitelistNoChangeIpWhitelist;
  /**
   * @remarks
   * The removed back-to-origin IP address whitelist.
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
   * The IPv4 addresses or CIDR blocks in the latest back-to-origin IP address whitelist.
   */
  IPv4?: string[];
  /**
   * @remarks
   * The IPv6 addresses or CIDR blocks in the latest back-to-origin IP address whitelist.
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

export class GetOriginProtectionResponseBodyRegionalCurrentIPWhitelistRegionalIPv4 extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block.
   * 
   * @example
   * 101.66.250.0/25
   */
  cidr?: string;
  /**
   * @remarks
   * The IPv4 region.
   * 
   * @example
   * chinese_mainland
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalCurrentIPWhitelistRegionalIPv6 extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block.
   * 
   * @example
   * 101.66.250.0/25
   */
  cidr?: string;
  /**
   * @remarks
   * The IPv6 region.
   * 
   * @example
   * chinese_mainland
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalCurrentIPWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR blocks and regions in the regional back-to-origin IP address whitelist that the site currently uses.
   */
  regionalIPv4?: GetOriginProtectionResponseBodyRegionalCurrentIPWhitelistRegionalIPv4[];
  /**
   * @remarks
   * The IPv6 CIDR blocks and regions in the regional back-to-origin IP address whitelist that the site currently uses.
   */
  regionalIPv6?: GetOriginProtectionResponseBodyRegionalCurrentIPWhitelistRegionalIPv6[];
  static names(): { [key: string]: string } {
    return {
      regionalIPv4: 'RegionalIPv4',
      regionalIPv6: 'RegionalIPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionalIPv4: { 'type': 'array', 'itemType': GetOriginProtectionResponseBodyRegionalCurrentIPWhitelistRegionalIPv4 },
      regionalIPv6: { 'type': 'array', 'itemType': GetOriginProtectionResponseBodyRegionalCurrentIPWhitelistRegionalIPv6 },
    };
  }

  validate() {
    if(Array.isArray(this.regionalIPv4)) {
      $dara.Model.validateArray(this.regionalIPv4);
    }
    if(Array.isArray(this.regionalIPv6)) {
      $dara.Model.validateArray(this.regionalIPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalDiffIPWhitelistAddedIPRegionWhitelistRegionalIPv4 extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block.
   * 
   * @example
   * 101.66.250.0/25
   */
  cidr?: string;
  /**
   * @remarks
   * The IPv4 region.
   * 
   * @example
   * chinese_mainland
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalDiffIPWhitelistAddedIPRegionWhitelistRegionalIPv6 extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block.
   * 
   * @example
   * 101.66.250.0/25
   */
  cidr?: string;
  /**
   * @remarks
   * The IPv6 region.
   * 
   * @example
   * chinese_mainland
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalDiffIPWhitelistAddedIPRegionWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR blocks and regions in the regional back-to-origin IP address whitelist.
   */
  regionalIPv4?: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistAddedIPRegionWhitelistRegionalIPv4[];
  /**
   * @remarks
   * The IPv6 CIDR blocks and regions in the regional back-to-origin IP address whitelist.
   */
  regionalIPv6?: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistAddedIPRegionWhitelistRegionalIPv6[];
  static names(): { [key: string]: string } {
    return {
      regionalIPv4: 'RegionalIPv4',
      regionalIPv6: 'RegionalIPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionalIPv4: { 'type': 'array', 'itemType': GetOriginProtectionResponseBodyRegionalDiffIPWhitelistAddedIPRegionWhitelistRegionalIPv4 },
      regionalIPv6: { 'type': 'array', 'itemType': GetOriginProtectionResponseBodyRegionalDiffIPWhitelistAddedIPRegionWhitelistRegionalIPv6 },
    };
  }

  validate() {
    if(Array.isArray(this.regionalIPv4)) {
      $dara.Model.validateArray(this.regionalIPv4);
    }
    if(Array.isArray(this.regionalIPv6)) {
      $dara.Model.validateArray(this.regionalIPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalDiffIPWhitelistNoChangeIpWhitelistRegionalIPv4 extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block.
   * 
   * @example
   * 101.66.250.0/25
   */
  cidr?: string;
  /**
   * @remarks
   * The IPv4 region.
   * 
   * @example
   * chinese_mainland
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalDiffIPWhitelistNoChangeIpWhitelistRegionalIPv6 extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block.
   * 
   * @example
   * 101.66.250.0/25
   */
  cidr?: string;
  /**
   * @remarks
   * The IPv6 region.
   * 
   * @example
   * chinese_mainland
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalDiffIPWhitelistNoChangeIpWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR blocks and regions in the regional back-to-origin IP address whitelist.
   */
  regionalIPv4?: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistNoChangeIpWhitelistRegionalIPv4[];
  /**
   * @remarks
   * The IPv6 CIDR blocks and regions in the regional back-to-origin IP address whitelist.
   */
  regionalIPv6?: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistNoChangeIpWhitelistRegionalIPv6[];
  static names(): { [key: string]: string } {
    return {
      regionalIPv4: 'RegionalIPv4',
      regionalIPv6: 'RegionalIPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionalIPv4: { 'type': 'array', 'itemType': GetOriginProtectionResponseBodyRegionalDiffIPWhitelistNoChangeIpWhitelistRegionalIPv4 },
      regionalIPv6: { 'type': 'array', 'itemType': GetOriginProtectionResponseBodyRegionalDiffIPWhitelistNoChangeIpWhitelistRegionalIPv6 },
    };
  }

  validate() {
    if(Array.isArray(this.regionalIPv4)) {
      $dara.Model.validateArray(this.regionalIPv4);
    }
    if(Array.isArray(this.regionalIPv6)) {
      $dara.Model.validateArray(this.regionalIPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalDiffIPWhitelistRemovedIPRegionWhitelistRegionalIPv4 extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block.
   * 
   * @example
   * 101.66.250.0/25
   */
  cidr?: string;
  /**
   * @remarks
   * The IPv4 region.
   * 
   * @example
   * chinese_mainland
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalDiffIPWhitelistRemovedIPRegionWhitelistRegionalIPv6 extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block.
   * 
   * @example
   * 101.66.250.0/25
   */
  cidr?: string;
  /**
   * @remarks
   * The IPv6 region.
   * 
   * @example
   * chinese_mainland
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalDiffIPWhitelistRemovedIPRegionWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR blocks and regions in the regional back-to-origin IP address whitelist.
   */
  regionalIPv4?: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistRemovedIPRegionWhitelistRegionalIPv4[];
  /**
   * @remarks
   * The IPv6 CIDR blocks and regions in the regional back-to-origin IP address whitelist.
   */
  regionalIPv6?: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistRemovedIPRegionWhitelistRegionalIPv6[];
  static names(): { [key: string]: string } {
    return {
      regionalIPv4: 'RegionalIPv4',
      regionalIPv6: 'RegionalIPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionalIPv4: { 'type': 'array', 'itemType': GetOriginProtectionResponseBodyRegionalDiffIPWhitelistRemovedIPRegionWhitelistRegionalIPv4 },
      regionalIPv6: { 'type': 'array', 'itemType': GetOriginProtectionResponseBodyRegionalDiffIPWhitelistRemovedIPRegionWhitelistRegionalIPv6 },
    };
  }

  validate() {
    if(Array.isArray(this.regionalIPv4)) {
      $dara.Model.validateArray(this.regionalIPv4);
    }
    if(Array.isArray(this.regionalIPv6)) {
      $dara.Model.validateArray(this.regionalIPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalDiffIPWhitelist extends $dara.Model {
  /**
   * @remarks
   * The added regional back-to-origin IP address whitelist.
   */
  addedIPRegionWhitelist?: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistAddedIPRegionWhitelist;
  /**
   * @remarks
   * The unchanged regional back-to-origin IP address whitelist.
   */
  noChangeIpWhitelist?: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistNoChangeIpWhitelist;
  /**
   * @remarks
   * The removed regional back-to-origin IP address whitelist.
   */
  removedIPRegionWhitelist?: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistRemovedIPRegionWhitelist;
  static names(): { [key: string]: string } {
    return {
      addedIPRegionWhitelist: 'AddedIPRegionWhitelist',
      noChangeIpWhitelist: 'NoChangeIpWhitelist',
      removedIPRegionWhitelist: 'RemovedIPRegionWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedIPRegionWhitelist: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistAddedIPRegionWhitelist,
      noChangeIpWhitelist: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistNoChangeIpWhitelist,
      removedIPRegionWhitelist: GetOriginProtectionResponseBodyRegionalDiffIPWhitelistRemovedIPRegionWhitelist,
    };
  }

  validate() {
    if(this.addedIPRegionWhitelist && typeof (this.addedIPRegionWhitelist as any).validate === 'function') {
      (this.addedIPRegionWhitelist as any).validate();
    }
    if(this.noChangeIpWhitelist && typeof (this.noChangeIpWhitelist as any).validate === 'function') {
      (this.noChangeIpWhitelist as any).validate();
    }
    if(this.removedIPRegionWhitelist && typeof (this.removedIPRegionWhitelist as any).validate === 'function') {
      (this.removedIPRegionWhitelist as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalLatestIPWhitelistRegionalIPv4 extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block.
   * 
   * @example
   * 101.66.250.0/25
   */
  cidr?: string;
  /**
   * @remarks
   * The IPv4 region.
   * 
   * @example
   * chinese_mainland
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalLatestIPWhitelistRegionalIPv6 extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block.
   * 
   * @example
   * 101.66.250.0/25
   */
  cidr?: string;
  /**
   * @remarks
   * The IPv6 region.
   * 
   * @example
   * chinese_mainland
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginProtectionResponseBodyRegionalLatestIPWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR blocks and regions in the latest regional back-to-origin IP address whitelist.
   */
  regionalIPv4?: GetOriginProtectionResponseBodyRegionalLatestIPWhitelistRegionalIPv4[];
  /**
   * @remarks
   * The IPv6 CIDR blocks and regions in the latest regional back-to-origin IP address whitelist.
   */
  regionalIPv6?: GetOriginProtectionResponseBodyRegionalLatestIPWhitelistRegionalIPv6[];
  static names(): { [key: string]: string } {
    return {
      regionalIPv4: 'RegionalIPv4',
      regionalIPv6: 'RegionalIPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionalIPv4: { 'type': 'array', 'itemType': GetOriginProtectionResponseBodyRegionalLatestIPWhitelistRegionalIPv4 },
      regionalIPv6: { 'type': 'array', 'itemType': GetOriginProtectionResponseBodyRegionalLatestIPWhitelistRegionalIPv6 },
    };
  }

  validate() {
    if(Array.isArray(this.regionalIPv4)) {
      $dara.Model.validateArray(this.regionalIPv4);
    }
    if(Array.isArray(this.regionalIPv6)) {
      $dara.Model.validateArray(this.regionalIPv6);
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
   * Indicates whether the latest back-to-origin IP address list is automatically enabled.
   * 
   * @example
   * off
   */
  autoConfirmIPList?: string;
  /**
   * @remarks
   * The back-to-origin IP address whitelist that the site currently uses.
   */
  currentIPWhitelist?: GetOriginProtectionResponseBodyCurrentIPWhitelist;
  /**
   * @remarks
   * The changes in the back-to-origin IP address whitelist.
   */
  diffIPWhitelist?: GetOriginProtectionResponseBodyDiffIPWhitelist;
  /**
   * @remarks
   * The latest back-to-origin IP address whitelist.
   */
  latestIPWhitelist?: GetOriginProtectionResponseBodyLatestIPWhitelist;
  /**
   * @remarks
   * Indicates whether the back-to-origin IP address whitelist needs to be updated. If the current whitelist differs from the latest one, this parameter returns true.
   * 
   * - true: An update is required.
   * 
   * - false: No update is required.
   * 
   * @example
   * true
   */
  needUpdate?: boolean;
  /**
   * @remarks
   * The back-to-origin convergence switch.
   * 
   * - on: enabled.
   * 
   * - off: disabled.
   * 
   * @example
   * on
   */
  originConverge?: string;
  /**
   * @remarks
   * The origin protection switch.
   * 
   * - on: enabled.
   * 
   * - off: disabled.
   * 
   * @example
   * on
   */
  originProtection?: string;
  /**
   * @remarks
   * The regional back-to-origin IP address whitelist that the site currently uses.
   */
  regionalCurrentIPWhitelist?: GetOriginProtectionResponseBodyRegionalCurrentIPWhitelist;
  /**
   * @remarks
   * The IP address whitelist for back-to-origin requests, differentiated by region.
   */
  regionalDiffIPWhitelist?: GetOriginProtectionResponseBodyRegionalDiffIPWhitelist;
  /**
   * @remarks
   * The latest regional back-to-origin IP address whitelist.
   */
  regionalLatestIPWhitelist?: GetOriginProtectionResponseBodyRegionalLatestIPWhitelist;
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
   * The site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      autoConfirmIPList: 'AutoConfirmIPList',
      currentIPWhitelist: 'CurrentIPWhitelist',
      diffIPWhitelist: 'DiffIPWhitelist',
      latestIPWhitelist: 'LatestIPWhitelist',
      needUpdate: 'NeedUpdate',
      originConverge: 'OriginConverge',
      originProtection: 'OriginProtection',
      regionalCurrentIPWhitelist: 'RegionalCurrentIPWhitelist',
      regionalDiffIPWhitelist: 'RegionalDiffIPWhitelist',
      regionalLatestIPWhitelist: 'RegionalLatestIPWhitelist',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfirmIPList: 'string',
      currentIPWhitelist: GetOriginProtectionResponseBodyCurrentIPWhitelist,
      diffIPWhitelist: GetOriginProtectionResponseBodyDiffIPWhitelist,
      latestIPWhitelist: GetOriginProtectionResponseBodyLatestIPWhitelist,
      needUpdate: 'boolean',
      originConverge: 'string',
      originProtection: 'string',
      regionalCurrentIPWhitelist: GetOriginProtectionResponseBodyRegionalCurrentIPWhitelist,
      regionalDiffIPWhitelist: GetOriginProtectionResponseBodyRegionalDiffIPWhitelist,
      regionalLatestIPWhitelist: GetOriginProtectionResponseBodyRegionalLatestIPWhitelist,
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
    if(this.regionalCurrentIPWhitelist && typeof (this.regionalCurrentIPWhitelist as any).validate === 'function') {
      (this.regionalCurrentIPWhitelist as any).validate();
    }
    if(this.regionalDiffIPWhitelist && typeof (this.regionalDiffIPWhitelist as any).validate === 'function') {
      (this.regionalDiffIPWhitelist as any).validate();
    }
    if(this.regionalLatestIPWhitelist && typeof (this.regionalLatestIPWhitelist as any).validate === 'function') {
      (this.regionalLatestIPWhitelist as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

