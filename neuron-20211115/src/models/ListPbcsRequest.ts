// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPbcsRequest extends $dara.Model {
  companyId?: number;
  developerId?: string;
  /**
   * @example
   * 1
   */
  marketId?: number;
  name?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      developerId: 'developerId',
      marketId: 'marketId',
      name: 'name',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      developerId: 'string',
      marketId: 'number',
      name: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

