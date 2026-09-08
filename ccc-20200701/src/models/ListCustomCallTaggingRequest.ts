// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomCallTaggingRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by a list of number tag names. This parameter is optional and defaults to empty, which means no filtering is applied. The format is a JSON array string, where each array element is a number tag name.
   * 
   * @example
   * ["TagA"]
   */
  callTagNameList?: string;
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
   * Perform fuzzy matching based on number or description. This parameter is optional and defaults to empty. An empty value indicates no filtering.
   * 
   * @example
   * 1312121****
   */
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      callTagNameList: 'CallTagNameList',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTagNameList: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

