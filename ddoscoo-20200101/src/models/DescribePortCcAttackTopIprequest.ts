// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortCcAttackTopIPRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ip?: string;
  limit?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  port?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      limit: 'Limit',
      port: 'Port',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      limit: 'number',
      port: 'string',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

