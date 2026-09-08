// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhoneNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the number is active. This parameter is optional. The default value is empty, which means no filtering is applied.
   * 
   * @example
   * true
   */
  active?: boolean;
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
   * The paging ordinal number, ranging from 1 to 100.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs fuzzy matching based on the number. This parameter is optional and defaults to empty. An empty value indicates no filtering.
   * 
   * @example
   * 0833
   */
  searchPattern?: string;
  /**
   * @remarks
   * Usage of the number. This parameter is optional. The default value is empty, which means no filtering is applied.
   * 
   * @example
   * Bidirection
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

