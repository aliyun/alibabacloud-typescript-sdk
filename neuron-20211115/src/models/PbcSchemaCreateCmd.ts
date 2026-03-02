// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcSchemaCreateCmd extends $dara.Model {
  companyId?: number;
  id?: number;
  marketId?: number;
  pbcName?: string;
  pbcVersion?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      id: 'id',
      marketId: 'marketId',
      pbcName: 'pbcName',
      pbcVersion: 'pbcVersion',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      id: 'number',
      marketId: 'number',
      pbcName: 'string',
      pbcVersion: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

