// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcVersionCmd extends $dara.Model {
  apiSchema?: string;
  companyId?: number;
  developerId?: number;
  document?: string;
  marketId?: number;
  name?: string;
  schema?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiSchema: 'apiSchema',
      companyId: 'companyId',
      developerId: 'developerId',
      document: 'document',
      marketId: 'marketId',
      name: 'name',
      schema: 'schema',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSchema: 'string',
      companyId: 'number',
      developerId: 'number',
      document: 'string',
      marketId: 'number',
      name: 'string',
      schema: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

