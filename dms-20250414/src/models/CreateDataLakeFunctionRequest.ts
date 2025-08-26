// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLFunctionInput } from "./DlfunctionInput";


export class CreateDataLakeFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  functionInput?: DLFunctionInput;
  /**
   * @example
   * 3****
   */
  tid?: number;
  /**
   * @example
   * 12****
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dbName: 'DbName',
      functionInput: 'FunctionInput',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbName: 'string',
      functionInput: DLFunctionInput,
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    if(this.functionInput && typeof (this.functionInput as any).validate === 'function') {
      (this.functionInput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

