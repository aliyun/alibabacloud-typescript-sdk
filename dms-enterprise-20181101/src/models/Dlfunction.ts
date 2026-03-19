// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLResourceUri } from "./DlresourceUri";


export class DLFunction extends $dara.Model {
  /**
   * @remarks
   * The name of the data catalog.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The JAVA class that contains the function code.
   * 
   * @example
   * com.example.hive.MyCustomUDF
   */
  className?: string;
  /**
   * @remarks
   * The time when the function was created.
   * 
   * @example
   * 1731586286
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who created the function.
   * 
   * @example
   * 12****
   */
  creatorId?: number;
  /**
   * @remarks
   * The name of the queried database.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * my_funciton
   */
  functionName?: string;
  /**
   * @remarks
   * The type of the function.
   * 
   * @example
   * JAVA
   */
  functionType?: string;
  /**
   * @remarks
   * The ID of the user who modified the function.
   * 
   * @example
   * 26****
   */
  modifierId?: number;
  /**
   * @remarks
   * The owner of the function.
   * 
   * @example
   * zhangsan
   */
  ownerName?: string;
  /**
   * @remarks
   * The type of the owner. Valid values:
   * 
   * *   ROLE
   * *   GROUP
   * *   USER
   * 
   * @example
   * USER
   */
  ownerType?: string;
  /**
   * @remarks
   * The resource URIs of the function. You cannot modify the resource URIs after the function is created.
   */
  resourceUris?: DLResourceUri[];
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      className: 'ClassName',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      dbName: 'DbName',
      functionName: 'FunctionName',
      functionType: 'FunctionType',
      modifierId: 'ModifierId',
      ownerName: 'OwnerName',
      ownerType: 'OwnerType',
      resourceUris: 'ResourceUris',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      className: 'string',
      createTime: 'number',
      creatorId: 'number',
      dbName: 'string',
      functionName: 'string',
      functionType: 'string',
      modifierId: 'number',
      ownerName: 'string',
      ownerType: 'string',
      resourceUris: { 'type': 'array', 'itemType': DLResourceUri },
    };
  }

  validate() {
    if(Array.isArray(this.resourceUris)) {
      $dara.Model.validateArray(this.resourceUris);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

