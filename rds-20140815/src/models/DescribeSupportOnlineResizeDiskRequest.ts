// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupportOnlineResizeDiskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

