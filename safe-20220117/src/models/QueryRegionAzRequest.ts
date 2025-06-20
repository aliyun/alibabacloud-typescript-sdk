// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegionAzRequest extends $dara.Model {
  authKey?: string;
  authSign?: string;
  limit?: number;
  page?: number;
  product?: string;
  reqTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      limit: 'Limit',
      page: 'Page',
      product: 'Product',
      reqTimestamp: 'ReqTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSign: 'string',
      limit: 'number',
      page: 'number',
      product: 'string',
      reqTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

