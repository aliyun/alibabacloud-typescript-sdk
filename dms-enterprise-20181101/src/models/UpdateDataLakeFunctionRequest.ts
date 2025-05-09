// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLFunctionInput } from "./DlfunctionInput";


export class UpdateDataLakeFunctionRequest extends $dara.Model {
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
   * cn-hangzhou
   */
  dataRegion?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my_funciton
   */
  functionName?: string;
  /**
   * @example
   * 3***
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
      dataRegion: 'DataRegion',
      dbName: 'DbName',
      functionInput: 'FunctionInput',
      functionName: 'FunctionName',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dataRegion: 'string',
      dbName: 'string',
      functionInput: DLFunctionInput,
      functionName: 'string',
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

