// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificateRequest extends $dara.Model {
  businessType?: number;
  endTime?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  phoneNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNo: 'PhoneNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      endTime: 'number',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNo: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

