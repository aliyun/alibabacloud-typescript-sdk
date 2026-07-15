// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCpfsAccessPointsRequest extends $dara.Model {
  /**
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290rg9crq96m362ups2
   */
  fileSystemId?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      fileSystemId: 'FileSystemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      fileSystemId: 'string',
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

