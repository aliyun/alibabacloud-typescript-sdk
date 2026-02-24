// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCompliancePacksRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  compliancePackIds?: string;
  deleteRule?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackIds: 'CompliancePackIds',
      deleteRule: 'DeleteRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackIds: 'string',
      deleteRule: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

