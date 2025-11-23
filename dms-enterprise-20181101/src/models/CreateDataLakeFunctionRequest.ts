// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLFunctionInput } from "./DlfunctionInput";


export class CreateDataLakeFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The region where the data lake resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  dataRegion?: string;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * The details about the function.
   * 
   * This parameter is required.
   */
  functionInput?: DLFunctionInput;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3****
   */
  tid?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
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

