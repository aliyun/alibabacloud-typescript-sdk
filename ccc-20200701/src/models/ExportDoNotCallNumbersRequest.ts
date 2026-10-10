// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDoNotCallNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The application scope. Valid values: SYSTEM and INSTANCE. SYSTEM indicates system-level do-not-call, and INSTANCE indicates customer-defined do-not-call. SYSTEM is associated with the Alibaba Cloud account to which the instance belongs, and INSTANCE is associated only with the current instance. This parameter is optional. Default value: INSTANCE.
   * 
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @remarks
   * Specifies the keyword to perform a fuzzy match based on the phone number or remark. This parameter is optional. Default value: empty. An empty value indicates that no filtering is applied.
   * 
   * @example
   * RemarkA
   */
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scope: 'Scope',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scope: 'string',
      searchPattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

