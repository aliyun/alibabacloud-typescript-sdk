// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcApiSchemaCreateCmd extends $dara.Model {
  apiSchema?: string;
  companyId?: number;
  marketId?: number;
  pbcVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      apiSchema: 'apiSchema',
      companyId: 'companyId',
      marketId: 'marketId',
      pbcVersionId: 'pbcVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSchema: 'string',
      companyId: 'number',
      marketId: 'number',
      pbcVersionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

