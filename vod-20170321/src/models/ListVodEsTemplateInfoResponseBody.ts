// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVodEsTemplateInfoResponseBodyDataItems extends $dara.Model {
  id?: number;
  tmplDef?: string;
  tmplDesc?: string;
  tmplName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      tmplDef: 'TmplDef',
      tmplDesc: 'TmplDesc',
      tmplName: 'TmplName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      tmplDef: 'string',
      tmplDesc: 'string',
      tmplName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVodEsTemplateInfoResponseBody extends $dara.Model {
  dataItems?: ListVodEsTemplateInfoResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataItems: 'DataItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItems: { 'type': 'array', 'itemType': ListVodEsTemplateInfoResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataItems)) {
      $dara.Model.validateArray(this.dataItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

