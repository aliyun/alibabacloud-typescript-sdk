// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPdpPbcsRequest extends $dara.Model {
  companyId?: number;
  developerId?: string;
  keyword?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  pbcIds?: number[];
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      developerId: 'developerId',
      keyword: 'keyword',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pbcIds: 'pbcIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      developerId: 'string',
      keyword: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pbcIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.pbcIds)) {
      $dara.Model.validateArray(this.pbcIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

