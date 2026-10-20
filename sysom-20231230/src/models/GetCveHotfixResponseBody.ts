// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCveHotfixResponseBodyDataHotfixPackages extends $dara.Model {
  /**
   * @remarks
   * The architecture.
   * 
   * @example
   * x86_64
   */
  arch?: string;
  /**
   * @remarks
   * The distribution. This value is null if the distribution is not registered.
   * 
   * @example
   * alinux3
   * 
   * **if can be null:**
   * true
   */
  distro?: string;
  /**
   * @remarks
   * The compatible full kernel version.
   * 
   * @example
   * 5.10.134-18.al8.x86_64
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The RPM package identifier.
   * 
   * @example
   * kernel-hotfix-example-1.0-1.x86_64
   */
  rpmNevra?: string;
  static names(): { [key: string]: string } {
    return {
      arch: 'arch',
      distro: 'distro',
      kernelVersion: 'kernelVersion',
      rpmNevra: 'rpmNevra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arch: 'string',
      distro: 'string',
      kernelVersion: 'string',
      rpmNevra: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCveHotfixResponseBodyDataHotfix extends $dara.Model {
  /**
   * @remarks
   * The hotfix description.
   * 
   * @example
   * Fixes the kernel issue corresponding to the CVE
   */
  description?: string;
  /**
   * @remarks
   * The hotfix name.
   * 
   * @example
   * 12345678
   */
  hotfixName?: string;
  /**
   * @remarks
   * The hotfix module name.
   * 
   * @example
   * kpatch_example
   */
  moduleName?: string;
  /**
   * @remarks
   * The list of published packages that meet the kernel requirements.
   */
  packages?: GetCveHotfixResponseBodyDataHotfixPackages[];
  /**
   * @remarks
   * The hotfix version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      hotfixName: 'hotfixName',
      moduleName: 'moduleName',
      packages: 'packages',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hotfixName: 'string',
      moduleName: 'string',
      packages: { 'type': 'array', 'itemType': GetCveHotfixResponseBodyDataHotfixPackages },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.packages)) {
      $dara.Model.validateArray(this.packages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCveHotfixResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The CVE ID.
   * 
   * @example
   * CVE-2026-12345
   */
  cveId?: string;
  /**
   * @remarks
   * The hotfix information for the CVE.
   * 
   * **if can be null:**
   * true
   */
  hotfix?: GetCveHotfixResponseBodyDataHotfix;
  static names(): { [key: string]: string } {
    return {
      cveId: 'cveId',
      hotfix: 'hotfix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      hotfix: GetCveHotfixResponseBodyDataHotfix,
    };
  }

  validate() {
    if(this.hotfix && typeof (this.hotfix as any).validate === 'function') {
      (this.hotfix as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCveHotfixResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate that the authorization failed. If the authorization failed, check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetCveHotfixResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * “”
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * example-request-id
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCveHotfixResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

