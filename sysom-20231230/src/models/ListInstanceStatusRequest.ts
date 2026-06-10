// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This field exists when paging is used and indicates the current page (starting from 1).
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * i-wz9b9vucz1iubsz355rh
   */
  instance?: string;
  /**
   * @remarks
   * Number of entries returned per page. Default value: pageSize=10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * Filter the instance list by status. If this field is specified, only instances with the corresponding status are returned.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      instance: 'instance',
      pageSize: 'pageSize',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      instance: 'string',
      pageSize: 'number',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

