// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Permission extends $dara.Model {
  access?: string;
  database?: string;
  principal?: string;
  resourceType?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      access: 'access',
      database: 'database',
      principal: 'principal',
      resourceType: 'resourceType',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      access: 'string',
      database: 'string',
      principal: 'string',
      resourceType: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

