// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsStatisticsByTemplateNewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  ownerId?: number;
  prodCode?: string;
  prodId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
      startDate: 'StartDate',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      ownerId: 'number',
      prodCode: 'string',
      prodId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

