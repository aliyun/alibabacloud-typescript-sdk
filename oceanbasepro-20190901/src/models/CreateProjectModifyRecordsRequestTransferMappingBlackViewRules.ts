// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectModifyRecordsRequestTransferMappingBlackViewRulesObjectMapping } from "./CreateProjectModifyRecordsRequestTransferMappingBlackViewRulesObjectMapping";
import { CreateProjectModifyRecordsRequestTransferMappingBlackViewRulesSchemaMapping } from "./CreateProjectModifyRecordsRequestTransferMappingBlackViewRulesSchemaMapping";


export class CreateProjectModifyRecordsRequestTransferMappingBlackViewRules extends $dara.Model {
  objectMapping?: CreateProjectModifyRecordsRequestTransferMappingBlackViewRulesObjectMapping;
  schemaMapping?: CreateProjectModifyRecordsRequestTransferMappingBlackViewRulesSchemaMapping;
  static names(): { [key: string]: string } {
    return {
      objectMapping: 'ObjectMapping',
      schemaMapping: 'SchemaMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectMapping: CreateProjectModifyRecordsRequestTransferMappingBlackViewRulesObjectMapping,
      schemaMapping: CreateProjectModifyRecordsRequestTransferMappingBlackViewRulesSchemaMapping,
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

