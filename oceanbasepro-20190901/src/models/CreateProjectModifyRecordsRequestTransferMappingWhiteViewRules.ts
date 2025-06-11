// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectModifyRecordsRequestTransferMappingWhiteViewRulesObjectMapping } from "./CreateProjectModifyRecordsRequestTransferMappingWhiteViewRulesObjectMapping";
import { CreateProjectModifyRecordsRequestTransferMappingWhiteViewRulesSchemaMapping } from "./CreateProjectModifyRecordsRequestTransferMappingWhiteViewRulesSchemaMapping";


export class CreateProjectModifyRecordsRequestTransferMappingWhiteViewRules extends $dara.Model {
  objectMapping?: CreateProjectModifyRecordsRequestTransferMappingWhiteViewRulesObjectMapping;
  schemaMapping?: CreateProjectModifyRecordsRequestTransferMappingWhiteViewRulesSchemaMapping;
  static names(): { [key: string]: string } {
    return {
      objectMapping: 'ObjectMapping',
      schemaMapping: 'SchemaMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectMapping: CreateProjectModifyRecordsRequestTransferMappingWhiteViewRulesObjectMapping,
      schemaMapping: CreateProjectModifyRecordsRequestTransferMappingWhiteViewRulesSchemaMapping,
    };
  }

  validate() {
    if(this.objectMapping && typeof (this.objectMapping as any).validate === 'function') {
      (this.objectMapping as any).validate();
    }
    if(this.schemaMapping && typeof (this.schemaMapping as any).validate === 'function') {
      (this.schemaMapping as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

