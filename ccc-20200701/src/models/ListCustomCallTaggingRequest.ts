// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomCallTaggingRequest extends $dara.Model {
  /**
   * @example
   * ["TagA"]
   */
  callTagNameList?: string;
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
   * 10
   */
  pageSize?: number;
  /**
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

