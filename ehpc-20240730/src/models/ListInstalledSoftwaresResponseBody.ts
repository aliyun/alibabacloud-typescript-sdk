// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos extends $dara.Model {
  category?: string;
  createTime?: string;
  description?: string;
  icon?: string;
  name?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwaresResponseBodyAdditionalPackages extends $dara.Model {
  additionalPackageInfos?: ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos[];
  static names(): { [key: string]: string } {
    return {
      additionalPackageInfos: 'AdditionalPackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackageInfos: { 'type': 'array', 'itemType': ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos },
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

export class ListInstalledSoftwaresResponseBody extends $dara.Model {
  additionalPackages?: ListInstalledSoftwaresResponseBodyAdditionalPackages;
  /**
   * @remarks
   * The page number of the returned page.
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
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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
      additionalPackages: ListInstalledSoftwaresResponseBodyAdditionalPackages,
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

