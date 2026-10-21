// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountedClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The client IP address.
   * 
   * - If you specify a client IP address, the operation checks whether the client list contains the specified client IP address. If the list contains the IP address, the IP address is returned. If the list does not contain the IP address, an empty list is returned.
   * - If you do not specify a client IP address, the operation returns all client IP addresses that have used the NAS file system within the last minute.
   * 
   * @example
   * 10.10.10.1
   */
  clientIP?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * 1111222****95.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The page number of the client list.
   * 
   * Start value (default value): 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of client IP addresses on each page in a paged query.
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

