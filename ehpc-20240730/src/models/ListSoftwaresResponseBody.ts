// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos extends $dara.Model {
  architecture?: string;
  osTag?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs extends $dara.Model {
  supportOsInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos[];
  static names(): { [key: string]: string } {
    return {
      supportOsInfos: 'SupportOsInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportOsInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos },
    };
  }

  validate() {
    if(Array.isArray(this.supportOsInfos)) {
      $dara.Model.validateArray(this.supportOsInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos extends $dara.Model {
  latest?: string;
  supportOs?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      latest: 'Latest',
      supportOs: 'SupportOs',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latest: 'string',
      supportOs: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs,
      version: 'string',
    };
  }

  validate() {
    if(this.supportOs && typeof (this.supportOs as any).validate === 'function') {
      (this.supportOs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions extends $dara.Model {
  versionInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos[];
  static names(): { [key: string]: string } {
    return {
      versionInfos: 'VersionInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos },
    };
  }

  validate() {
    if(Array.isArray(this.versionInfos)) {
      $dara.Model.validateArray(this.versionInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos extends $dara.Model {
  category?: string;
  description?: string;
  icon?: string;
  name?: string;
  versions?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
      versions: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions,
    };
  }

  validate() {
    if(this.versions && typeof (this.versions as any).validate === 'function') {
      (this.versions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackages extends $dara.Model {
  additionalPackageInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos[];
  static names(): { [key: string]: string } {
    return {
      additionalPackageInfos: 'AdditionalPackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackageInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos },
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackageInfos)) {
      $dara.Model.validateArray(this.additionalPackageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBody extends $dara.Model {
  additionalPackages?: ListSoftwaresResponseBodyAdditionalPackages;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: ListSoftwaresResponseBodyAdditionalPackages,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.additionalPackages && typeof (this.additionalPackages as any).validate === 'function') {
      (this.additionalPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

