// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationTemplatesRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  managedRuleIdentifier?: string;
  pageNumber?: number;
  pageSize?: number;
  remediationType?: string;
  static names(): { [key: string]: string } {
    return {
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remediationType: 'RemediationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remediationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

