// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectModifyRecordsRequestDatabases } from "./CreateProjectModifyRecordsRequestDatabases";
import { CreateProjectModifyRecordsRequestTransferMapping } from "./CreateProjectModifyRecordsRequestTransferMapping";


export class CreateProjectModifyRecordsRequest extends $dara.Model {
  databases?: CreateProjectModifyRecordsRequestDatabases[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * np_fe****
   */
  id?: string;
  transferMapping?: CreateProjectModifyRecordsRequestTransferMapping;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      id: 'Id',
      transferMapping: 'TransferMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestDatabases },
      id: 'string',
      transferMapping: CreateProjectModifyRecordsRequestTransferMapping,
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    if(this.transferMapping && typeof (this.transferMapping as any).validate === 'function') {
      (this.transferMapping as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

