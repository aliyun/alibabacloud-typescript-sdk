// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoNotCallNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Scope of application, including SYSTEM and INSTANCE. SYSTEM corresponds to system-level Do Not Call configurations associated with the Alibaba Cloud account to which the instance belongs. INSTANCE corresponds to custom Do Not Call configurations specific to the current instance. This parameter is optional, with a default value of INSTANCE.
   * 
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @remarks
   * Fuzzy matching based on phone number or remark. This parameter is optional, with a default value of empty, meaning no filtering is applied when empty.
   * 
   * @example
   * RemarkA
   */
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scope: 'Scope',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

