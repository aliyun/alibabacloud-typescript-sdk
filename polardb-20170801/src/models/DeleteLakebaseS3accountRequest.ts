// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLakebaseS3AccountRequest extends $dara.Model {
  /**
   * @remarks
   * The PolarFS instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-xxx
   */
  pfsInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * >You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The access key of the S3 account to delete.
   * 
   * > The default account cannot be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * accname
   */
  userAccAk?: string;
  static names(): { [key: string]: string } {
    return {
      pfsInstanceId: 'PfsInstanceId',
      regionId: 'RegionId',
      userAccAk: 'UserAccAk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pfsInstanceId: 'string',
      regionId: 'string',
      userAccAk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

