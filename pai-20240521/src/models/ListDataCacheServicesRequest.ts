// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCacheServicesRequest extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  quotaId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      quotaId: 'QuotaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      quotaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

