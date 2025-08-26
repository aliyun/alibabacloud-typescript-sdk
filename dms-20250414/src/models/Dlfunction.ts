// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLResourceUri } from "./DlresourceUri";


export class DLFunction extends $dara.Model {
  catalogName?: string;
  className?: string;
  createTime?: number;
  creatorId?: number;
  dbName?: string;
  functionName?: string;
  functionType?: string;
  modifierId?: number;
  ownerName?: string;
  ownerType?: string;
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

