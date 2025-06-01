// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalProcessesForApprovalSchemasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  schemaIds?: string[];
  static names(): { [key: string]: string } {
    return {
      schemaIds: 'SchemaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.schemaIds)) {
      $dara.Model.validateArray(this.schemaIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

