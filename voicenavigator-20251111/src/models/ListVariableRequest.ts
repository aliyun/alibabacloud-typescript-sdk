// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVariableRequest extends $dara.Model {
  /**
   * @example
   * c28fc549-d88f-4f6e-85ad-a0806e5e39c0
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * age
   */
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

