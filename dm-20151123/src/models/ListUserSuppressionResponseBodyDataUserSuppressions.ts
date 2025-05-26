// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserSuppressionResponseBodyDataUserSuppressions extends $dara.Model {
  /**
   * @remarks
   * Email address or domain name
   * 
   * @example
   * test@example.net
   */
  address?: string;
  /**
   * @remarks
   * Creation time, timestamp, accurate to the second.
   * 
   * @example
   * 1715667435
   */
  createTime?: number;
  /**
   * @remarks
   * Last bounce hit time, timestamp, accurate to the second.
   * 
   * @example
   * 1715667451
   */
  lastBounceTime?: number;
  /**
   * @remarks
   * Invalid address ID
   * 
   * @example
   * 59511
   */
  suppressionId?: number;
  /**
   * @remarks
   * Source of entry, invalid address type
   * - system
   * - user
   * 
   * @example
   * user
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      createTime: 'CreateTime',
      lastBounceTime: 'LastBounceTime',
      suppressionId: 'SuppressionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      createTime: 'number',
      lastBounceTime: 'number',
      suppressionId: 'number',
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

