// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntegratedServiceStatusResponseBody extends $dara.Model {
  /**
   * @example
   * NonCompliantNotification
   */
  aggregatorDeliveryDataType?: string;
  /**
   * @example
   * false
   */
  data?: boolean;
  /**
   * @example
   * 2E265A38-84D9-5083-A333-B33A2B46D139
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorDeliveryDataType: 'AggregatorDeliveryDataType',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorDeliveryDataType: 'string',
      data: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

