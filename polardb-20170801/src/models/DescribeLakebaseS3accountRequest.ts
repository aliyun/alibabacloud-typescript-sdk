// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLakebaseS3AccountRequest extends $dara.Model {
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
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query all available regions for the current account, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The Access Key of the S3 account.
   * 
   * > The account name can contain only letters and digits and can be up to 32 characters in length.
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

