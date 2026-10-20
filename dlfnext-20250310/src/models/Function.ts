// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FunctionDefinition } from "./FunctionDefinition";
import { DataField } from "./DataField";


export class Function extends $dara.Model {
  /**
   * @remarks
   * The comment information.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1741266704867
   */
  createdAt?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * The function metadata definitions.
   */
  definitions?: { [key: string]: FunctionDefinition };
  /**
   * @remarks
   * Specifies whether the same input always returns the same output.
   * 
   * @example
   * true
   */
  deterministic?: boolean;
  /**
   * @remarks
   * ID
   * 
   * @example
   * db-xxxx
   */
  id?: string;
  /**
   * @remarks
   * The field input parameters.
   */
  inputParams?: DataField[];
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The extension options.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  owner?: string;
  /**
   * @remarks
   * The return fields of the function.
   */
  returnParams?: DataField[];
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1764556033696
   */
  updatedAt?: number;
  /**
   * @remarks
   * The updater.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
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

