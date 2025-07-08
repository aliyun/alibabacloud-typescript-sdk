// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsStatisticsUrlNewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  ownerId?: number;
  prodCode?: string;
  prodId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      prodId: 'ProdId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      startDate: 'StartDate',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      ownerId: 'number',
      prodCode: 'string',
      prodId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      startDate: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

