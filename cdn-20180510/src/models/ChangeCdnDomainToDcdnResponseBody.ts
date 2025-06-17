// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCdnDomainToDcdnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the migration instructions.
   * 
   * @example
   * {
   * 		"The_domain_name_quota_for_the_target_account_has_reached_the_upper_limit": true,
   * 		"Domain_name_requires_node2_architecture_to_be_enabled": true,
   * 		"Internal_customer_domain_name_migration_prohibited": true,
   * 		"Prohibit_the_migration_of_important_customer_domain_names": true,
   * 		"Protected_domain_names_are_prohibited_from_migration": true,
   * 		"Domain_names_accessed_through_TopDomain_are_prohibited_from_migration": true,
   * 		"Prohibit_migration_of_customer_domain_names_for_integrated_access": true
   * 	}
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6172599-7DA7-5471-9D22-359A4E0C9B94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

