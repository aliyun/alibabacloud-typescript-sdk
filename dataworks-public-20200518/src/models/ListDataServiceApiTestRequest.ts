// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiTestRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API to test.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  apiId?: number;
  /**
   * @remarks
   * The page size. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

