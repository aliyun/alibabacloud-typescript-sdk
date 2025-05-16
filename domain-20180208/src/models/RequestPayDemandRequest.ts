// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequestPayDemandRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SE20183A0Q7C5556
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @example
   * some message
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 1
   */
  produceType?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domainName: 'DomainName',
      message: 'Message',
      price: 'Price',
      produceType: 'ProduceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domainName: 'string',
      message: 'string',
      price: 'number',
      produceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

