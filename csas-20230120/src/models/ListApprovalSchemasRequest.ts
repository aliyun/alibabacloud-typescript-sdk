// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalSchemasRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number for paged queries. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page for paged queries. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **DomainBlacklist**: Domain blacklist.
   * 
   * - **DomainWhitelist**: Domain whitelist.
   * 
   * - **SoftwareBlock**: Software disable.
   * 
   * - **AppUninstall**: Terminal uninstall.
   * 
   * - **DlpSend**: File outbound.
   * 
   * - **PeripheralBlock**: Peripheral control.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @remarks
   * Collection of approval template IDs.
   */
  schemaIds?: string[];
  /**
   * @remarks
   * The template name. It can be 1 to 128 characters long. It supports Chinese characters, uppercase and lowercase English letters, numbers, periods (.), underscores (_), and hyphens (-).
   * 
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

