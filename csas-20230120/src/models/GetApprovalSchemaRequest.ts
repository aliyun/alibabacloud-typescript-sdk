// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the approval template. Call [ListApprovalSchemas](~~ListApprovalSchemas~~) to list approval templates.
   * 
   * - [ListApprovalSchemas](~~ListApprovalSchemas~~): List approval templates in batches.
   * 
   * This parameter is required.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

