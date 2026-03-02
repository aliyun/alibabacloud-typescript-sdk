// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPdpPbcsShrinkRequest extends $dara.Model {
  companyId?: number;
  developerId?: string;
  keyword?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  pbcIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      developerId: 'developerId',
      keyword: 'keyword',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pbcIdsShrink: 'pbcIds',
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
      pbcIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

