// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCpfsAccessPointsResponseBodyAccessPointsRootDirectory extends $dara.Model {
  /**
   * @example
   * /path
   */
  rootPath?: string;
  /**
   * @example
   * Ready
   */
  rootPathStatus?: string;
  static names(): { [key: string]: string } {
    return {
      rootPath: 'RootPath',
      rootPathStatus: 'RootPathStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rootPath: 'string',
      rootPathStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCpfsAccessPointsResponseBodyAccessPoints extends $dara.Model {
  /**
   * @example
   * acs:nas:cn-hangzhou:178321033379****:accesspoint/ap-ie15yd****
   */
  ARN?: string;
  /**
   * @example
   * ap-ie15y*****
   */
  accessPointId?: string;
  /**
   * @example
   * 2026-03-28T06:32:14Z
   */
  createTime?: string;
  /**
   * @example
   * Description
   */
  description?: string;
  /**
   * @example
   * bmcpfs-290r9c75fnb0il8d8v1
   */
  fileSystemId?: string;
  /**
   * @example
   * 2025-03-28T06:32:14Z
   */
  modifyTime?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  rootDirectory?: DescribeCpfsAccessPointsResponseBodyAccessPointsRootDirectory;
  /**
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ARN: 'ARN',
      accessPointId: 'AccessPointId',
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      modifyTime: 'ModifyTime',
      regionId: 'RegionId',
      rootDirectory: 'RootDirectory',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ARN: 'string',
      accessPointId: 'string',
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      modifyTime: 'string',
      regionId: 'string',
      rootDirectory: DescribeCpfsAccessPointsResponseBodyAccessPointsRootDirectory,
      status: 'string',
    };
  }

  validate() {
    if(this.rootDirectory && typeof (this.rootDirectory as any).validate === 'function') {
      (this.rootDirectory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCpfsAccessPointsResponseBody extends $dara.Model {
  accessPoints?: DescribeCpfsAccessPointsResponseBodyAccessPoints[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * A323836B-5BC6-45A6-8048-60675C23****
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPoints: 'AccessPoints',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoints: { 'type': 'array', 'itemType': DescribeCpfsAccessPointsResponseBodyAccessPoints },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessPoints)) {
      $dara.Model.validateArray(this.accessPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

