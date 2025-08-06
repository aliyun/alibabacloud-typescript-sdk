// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVodEsTemplateInfoRequest extends $dara.Model {
  language?: string;
  op?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      op: 'Op',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      op: 'string',
      ownerId: 'number',
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

