// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCpfsAccessPointsResponseBodyAccessPointsRootDirectory extends $dara.Model {
  /**
   * @remarks
   * The root directory.
   * 
   * @example
   * /path
   */
  rootPath?: string;
  /**
   * @remarks
   * The current status of the root directory.
   * 
   * Valid values:
   * 
   * - Unknown: the root path status is unknown.
   * - NotExist: the root path does not exist. It may have been deleted by the user.
   * - Ready: the root path status is normal.
   * 
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

export class DescribeCpfsAccessPointsResponseBodyAccessPointsTags extends $dara.Model {
  /**
   * @remarks
   * The key of the CPFS access point tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the CPFS access point tag.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
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
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the access point.
   * 
   * @example
   * acs:nas:cn-hangzhou:178321033379****:accesspoint/ap-ie15yd****
   */
  ARN?: string;
  /**
   * @remarks
   * The access point ID.
   * 
   * @example
   * ap-ie15y*****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The time when the access point was created. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-03-28T06:32:14Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the access point.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * bmcpfs-290r9c75fnb0il8d8v1
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The time when the access point was last modified. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-03-28T06:32:14Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The root directory information.
   */
  rootDirectory?: DescribeCpfsAccessPointsResponseBodyAccessPointsRootDirectory;
  /**
   * @remarks
   * The current status of the access point.
   * 
   * Valid values:
   * 
   * - Active: available.
   * - Inactive: unavailable.
   * - Pending: being created.
   * - Deleting: being deleted.
   * 
   * > You can mount the file system only when the status is Active.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The list of CPFS access point tags.
   */
  tags?: DescribeCpfsAccessPointsResponseBodyAccessPointsTags[];
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': DescribeCpfsAccessPointsResponseBodyAccessPointsTags },
    };
  }

  validate() {
    if(this.rootDirectory && typeof (this.rootDirectory as any).validate === 'function') {
      (this.rootDirectory as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCpfsAccessPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access point information.
   */
  accessPoints?: DescribeCpfsAccessPointsResponseBodyAccessPoints[];
  /**
   * @remarks
   * The page number of the list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page.
   * Valid values: 1 to 100.                              
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A323836B-5BC6-45A6-8048-60675C23****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access points.
   * 
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

