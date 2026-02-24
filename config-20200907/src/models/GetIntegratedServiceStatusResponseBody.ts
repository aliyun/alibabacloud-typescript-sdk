// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntegratedServiceStatusResponseBody extends $dara.Model {
  aggregatorDeliveryDataType?: string;
  data?: boolean;
  integratedTypes?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorDeliveryDataType: 'AggregatorDeliveryDataType',
      data: 'Data',
      integratedTypes: 'IntegratedTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorDeliveryDataType: 'string',
      data: 'boolean',
      integratedTypes: 'string',
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

