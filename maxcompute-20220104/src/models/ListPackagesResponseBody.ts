// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPackagesResponseBodyDataCreatedPackages extends $dara.Model {
  createTime?: number;
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
  installTime?: number;
  name?: string;
  sourceProject?: string;
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
  createdPackages?: ListPackagesResponseBodyDataCreatedPackages[];
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
  data?: ListPackagesResponseBodyData;
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

