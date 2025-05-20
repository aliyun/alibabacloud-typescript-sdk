// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Schema } from "./Schema";


export class Table extends $dara.Model {
  createdAt?: number;
  createdBy?: string;
  id?: string;
  isExternal?: boolean;
  name?: string;
  owner?: string;
  path?: string;
  schema?: Schema;
  schemaId?: number;
  updatedAt?: number;
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      id: 'id',
      isExternal: 'isExternal',
      name: 'name',
      owner: 'owner',
      path: 'path',
      schema: 'schema',
      schemaId: 'schemaId',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      id: 'string',
      isExternal: 'boolean',
      name: 'string',
      owner: 'string',
      path: 'string',
      schema: Schema,
      schemaId: 'number',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

