// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to return the total count
   * 
   * @example
   * true
   */
  countTotalRow?: boolean;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 2a830781-324e-4568-ae96-309f93090fe1
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      countTotalRow: 'CountTotalRow',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countTotalRow: 'boolean',
      instanceId: 'string',
      pageNumber: 'number',
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

