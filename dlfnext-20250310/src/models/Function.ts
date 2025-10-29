// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FunctionDefinition } from "./FunctionDefinition";
import { DataField } from "./DataField";


export class Function extends $dara.Model {
  comment?: string;
  createdAt?: number;
  createdBy?: string;
  definitions?: { [key: string]: FunctionDefinition };
  deterministic?: boolean;
  id?: string;
  inputParams?: DataField[];
  name?: string;
  options?: { [key: string]: string };
  owner?: string;
  returnParams?: DataField[];
  updatedAt?: number;
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      definitions: 'definitions',
      deterministic: 'deterministic',
      id: 'id',
      inputParams: 'inputParams',
      name: 'name',
      options: 'options',
      owner: 'owner',
      returnParams: 'returnParams',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createdAt: 'number',
      createdBy: 'string',
      definitions: { 'type': 'map', 'keyType': 'string', 'valueType': FunctionDefinition },
      deterministic: 'boolean',
      id: 'string',
      inputParams: { 'type': 'array', 'itemType': DataField },
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      owner: 'string',
      returnParams: { 'type': 'array', 'itemType': DataField },
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    if(this.definitions) {
      $dara.Model.validateMap(this.definitions);
    }
    if(Array.isArray(this.inputParams)) {
      $dara.Model.validateArray(this.inputParams);
    }
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    if(Array.isArray(this.returnParams)) {
      $dara.Model.validateArray(this.returnParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

