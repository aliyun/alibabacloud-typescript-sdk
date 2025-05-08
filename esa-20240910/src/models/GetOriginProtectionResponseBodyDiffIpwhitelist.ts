// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOriginProtectionResponseBodyDiffIPWhitelistAddedIPWhitelist } from "./GetOriginProtectionResponseBodyDiffIpwhitelistAddedIpwhitelist";
import { GetOriginProtectionResponseBodyDiffIPWhitelistNoChangeIpWhitelist } from "./GetOriginProtectionResponseBodyDiffIpwhitelistNoChangeIpWhitelist";
import { GetOriginProtectionResponseBodyDiffIPWhitelistRemovedIPWhitelist } from "./GetOriginProtectionResponseBodyDiffIpwhitelistRemovedIpwhitelist";


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

