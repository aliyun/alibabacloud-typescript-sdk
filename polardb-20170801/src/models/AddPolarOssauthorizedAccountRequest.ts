// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPolarOSSAuthorizedAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890,acs:ram::123456:role/myrole
   */
  authorizedUserIds?: string;
  /**
   * @example
   * pc-xxxxxxxxxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pfs-xxxxxxxxxxxxxxxxx
   */
  pfsInstanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedUserIds: 'AuthorizedUserIds',
      DBClusterId: 'DBClusterId',
      pfsInstanceId: 'PfsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserIds: 'string',
      DBClusterId: 'string',
      pfsInstanceId: 'string',
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

