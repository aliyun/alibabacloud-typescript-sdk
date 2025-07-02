// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PermissionColumns } from "./PermissionColumns";


export class Permission extends $dara.Model {
  access?: string;
  columns?: PermissionColumns;
  database?: string;
  function?: string;
  principal?: string;
  resourceType?: string;
  table?: string;
  view?: string;
  static names(): { [key: string]: string } {
    return {
      access: 'access',
      columns: 'columns',
      database: 'database',
      function: 'function',
      principal: 'principal',
      resourceType: 'resourceType',
      table: 'table',
      view: 'view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      access: 'string',
      columns: PermissionColumns,
      database: 'string',
      function: 'string',
      principal: 'string',
      resourceType: 'string',
      table: 'string',
      view: 'string',
    };
  }

  validate() {
    if(this.columns && typeof (this.columns as any).validate === 'function') {
      (this.columns as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

