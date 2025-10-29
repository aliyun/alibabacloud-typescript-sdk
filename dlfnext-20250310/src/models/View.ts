// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ViewSchema } from "./ViewSchema";


export class View extends $dara.Model {
  createdAt?: number;
  createdBy?: string;
  id?: string;
  name?: string;
  owner?: string;
  schema?: ViewSchema;
  updatedAt?: number;
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      id: 'id',
      name: 'name',
      owner: 'owner',
      schema: 'schema',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      id: 'string',
      name: 'string',
      owner: 'string',
      schema: ViewSchema,
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

