// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiSystemParameterMapping extends $dara.Model {
  /**
   * @remarks
   * Optional. If this parameter is omitted or is an empty string, the default name based on the source is used. The default names for Header and Query are the same. The header name must be valid and cannot be Host, a pseudo-header, X-Mse-Consumer, or X-Mse-Consumer-Id.
   * 
   * @example
   * x-apig-api-id
   */
  name?: string;
  /**
   * @remarks
   * Required when configuring each mapping. The request is rejected if this parameter is omitted or empty. APIID and APIName represent the identifier and name of the current API. OperationId and OperationName represent the identifier and name of the current operation. ConsumerID, ConsumerName, and ConsumerExtInfo represent the identifier, name, and extended information of the currently authenticated consumer.
   * 
   * @example
   * APIID
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

