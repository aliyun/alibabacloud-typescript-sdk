// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the managed rule.
   * 
   * You can call the [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html) operation to obtain the managed rule identifier.
   * 
   * @example
   * oss-bucket-public-write-prohibited
   * 
   * **if can be null:**
   * true
   */
  managedRuleIdentifier?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the remediation template. Valid value: OOS, which stands for Operation Orchestration Service.
   * 
   * @example
   * OOS
   */
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

