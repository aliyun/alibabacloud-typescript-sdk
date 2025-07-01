// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountedClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * *   If you specify an IP address, the operation checks whether the client list includes this IP address. If the client list includes the IP address, the operation returns the IP address. If the client list does not include the IP address, the operation returns an empty list.
   * *   If you do not specify an IP address, the operation returns the IP addresses of all clients that have accessed the specified NAS file system within the last minute.
   * 
   * @example
   * 10.10.10.1
   */
  clientIP?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 109c****66
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The domain name of the mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * 1111222****95.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of IP addresses to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIP: 'ClientIP',
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIP: 'string',
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

