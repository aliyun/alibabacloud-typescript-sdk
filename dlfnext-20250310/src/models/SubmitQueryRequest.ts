// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQueryRequest extends $dara.Model {
  defaultCatalog?: string;
  defaultDatabase?: string;
  limit?: number;
  sql?: string;
  tier?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCatalog: 'defaultCatalog',
      defaultDatabase: 'defaultDatabase',
      limit: 'limit',
      sql: 'sql',
      tier: 'tier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCatalog: 'string',
      defaultDatabase: 'string',
      limit: 'number',
      sql: 'string',
      tier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

