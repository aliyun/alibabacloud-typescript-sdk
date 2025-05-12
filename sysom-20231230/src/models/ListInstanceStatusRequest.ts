// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceStatusRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * i-wz9b9vucz1iubsz355rh
   */
  instance?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
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

