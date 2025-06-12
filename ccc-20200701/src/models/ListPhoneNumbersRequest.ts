// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhoneNumbersRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 0833
   */
  searchPattern?: string;
  /**
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

