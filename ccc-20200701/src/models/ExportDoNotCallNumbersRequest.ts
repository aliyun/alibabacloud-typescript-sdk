// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDoNotCallNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies the scope of the do-not-call numbers. A value of SYSTEM applies to your entire Alibaba Cloud account, while INSTANCE applies only to the current instance. The default value is INSTANCE.
   * 
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @remarks
   * The keyword for a fuzzy search of phone numbers or remarks. If this parameter is left empty, no keyword-based filtering is applied.
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

