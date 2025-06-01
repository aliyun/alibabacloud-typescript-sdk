// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalSchemasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  schemaIds?: string[];
  /**
   * @example
   * test
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
      schemaIds: 'SchemaIds',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      policyType: 'string',
      schemaIds: { 'type': 'array', 'itemType': 'string' },
      schemaName: 'string',
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

