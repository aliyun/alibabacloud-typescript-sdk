// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CAPConfig } from "./Capconfig";


export class ToolListItem extends $dara.Model {
  CAPConfig?: CAPConfig;
  createdAt?: string;
  description?: string;
  id?: string;
  name?: string;
  schema?: string;
  sourceType?: string;
  toolType?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      CAPConfig: 'CAPConfig',
      createdAt: 'createdAt',
      description: 'description',
      id: 'id',
      name: 'name',
      schema: 'schema',
      sourceType: 'sourceType',
      toolType: 'toolType',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CAPConfig: CAPConfig,
      createdAt: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      schema: 'string',
      sourceType: 'string',
      toolType: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.CAPConfig && typeof (this.CAPConfig as any).validate === 'function') {
      (this.CAPConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

