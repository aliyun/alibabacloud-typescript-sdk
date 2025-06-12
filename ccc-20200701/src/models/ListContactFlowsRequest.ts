// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  orderByField?: string;
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
  sortOrder?: string;
  /**
   * @example
   * MAIN_FLOW
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderByField: 'OrderByField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortOrder: 'SortOrder',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderByField: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortOrder: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

