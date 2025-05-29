// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatementData extends $dara.Model {
  createdAt?: string;
  database?: string;
  id?: string;
  parameters?: string[];
  secretArn?: string;
  sql?: string;
  sqls?: string[];
  status?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      database: 'Database',
      id: 'Id',
      parameters: 'Parameters',
      secretArn: 'SecretArn',
      sql: 'Sql',
      sqls: 'Sqls',
      status: 'Status',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      database: 'string',
      id: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
      secretArn: 'string',
      sql: 'string',
      sqls: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.sqls)) {
      $dara.Model.validateArray(this.sqls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

