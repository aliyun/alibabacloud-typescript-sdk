// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number (starting from 1). This field is present when pagination is used.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9b9vucz1iubsz355rh
   */
  instance?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * Filters the instance list by status. If this field is specified, only instances with the corresponding status are returned.
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

