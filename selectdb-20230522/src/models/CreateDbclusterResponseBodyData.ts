// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateDBClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * selectdb-cn-1ls3sg0po0****
   */
  clusterId?: string;
  /**
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 219543646290345
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      DBInstanceId: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

