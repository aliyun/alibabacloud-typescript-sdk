// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLibrarysRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  companyId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  marketId?: number;
  name?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      marketId: 'marketId',
      name: 'name',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      marketId: 'number',
      name: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

