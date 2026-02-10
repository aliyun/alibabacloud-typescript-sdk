// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLResourceUri } from "./DlresourceUri";


export class DLFunctionInput extends $dara.Model {
  /**
   * @example
   * com.example.hive.MyCustomUDF
   */
  className?: string;
  /**
   * @example
   * 1731586286
   */
  createTime?: number;
  /**
   * @example
   * 12****
   */
  creatorId?: number;
  /**
   * @example
   * my_funciton
   */
  functionName?: string;
  /**
   * @example
   * JAVA
   */
  functionType?: string;
  /**
   * @example
   * 26****
   */
  modifierId?: number;
  /**
   * @example
   * zhangsan
   */
  ownerName?: string;
  /**
   * @example
   * USER
   */
  ownerType?: string;
  resourceUris?: DLResourceUri[];
  static names(): { [key: string]: string } {
    return {
      className: 'ClassName',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
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
      className: 'string',
      createTime: 'number',
      creatorId: 'number',
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

