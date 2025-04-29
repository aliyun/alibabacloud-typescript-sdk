// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExchangesResponseBodyDataExchanges extends $dara.Model {
  /**
   * @remarks
   * The attributes. This parameter is unavailable in the current version.
   * 
   * @example
   * test
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the exchange was automatically deleted.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The timestamp that indicates when the exchange was created. Unit: milliseconds.
   * 
   * @example
   * 1580886216000
   */
  createTime?: number;
  /**
   * @remarks
   * The exchange type.
   * 
   * @example
   * DIRECT
   */
  exchangeType?: string;
  /**
   * @remarks
   * The exchange name.
   * 
   * @example
   * amq.direct
   */
  name?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * @example
   * test
   */
  VHostName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      autoDeleteState: 'AutoDeleteState',
      createTime: 'CreateTime',
      exchangeType: 'ExchangeType',
      name: 'Name',
      VHostName: 'VHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      autoDeleteState: 'boolean',
      createTime: 'number',
      exchangeType: 'string',
      name: 'string',
      VHostName: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

