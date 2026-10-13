// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPackagesResponseBodyDataCreatedPackages extends $dara.Model {
  /**
   * @remarks
   * The creation time. The format is ISO 8601 and the time zone is UTC.
   * 
   * @example
   * 2022-08-02T02:30:34Z
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * packageA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBodyDataInstalledPackages extends $dara.Model {
  /**
   * @remarks
   * The installation time. The format is ISO 8601 and the time zone is UTC.
   * 
   * @example
   * 2022-09-02T02:30:34Z
   */
  installTime?: number;
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * packageB
   */
  name?: string;
  /**
   * @remarks
   * The project to which the package belongs. This parameter is required if the package is installed.
   * 
   * @example
   * projectB
   */
  sourceProject?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      installTime: 'installTime',
      name: 'name',
      sourceProject: 'sourceProject',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installTime: 'number',
      name: 'string',
      sourceProject: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of created packages.
   */
  createdPackages?: ListPackagesResponseBodyDataCreatedPackages[];
  /**
   * @remarks
   * The list of installed packages.
   */
  installedPackages?: ListPackagesResponseBodyDataInstalledPackages[];
  static names(): { [key: string]: string } {
    return {
      createdPackages: 'createdPackages',
      installedPackages: 'installedPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdPackages: { 'type': 'array', 'itemType': ListPackagesResponseBodyDataCreatedPackages },
      installedPackages: { 'type': 'array', 'itemType': ListPackagesResponseBodyDataInstalledPackages },
    };
  }

  validate() {
    if(Array.isArray(this.createdPackages)) {
      $dara.Model.validateArray(this.createdPackages);
    }
    if(Array.isArray(this.installedPackages)) {
      $dara.Model.validateArray(this.installedPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListPackagesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc3b4aa16677927210252786e4cb6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListPackagesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

