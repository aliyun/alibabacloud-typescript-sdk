// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIntegratedServiceStatusRequest extends $dara.Model {
  aggregatorDeliveryDataType?: string;
  integratedTypes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cadt
   */
  serviceCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      aggregatorDeliveryDataType: 'AggregatorDeliveryDataType',
      integratedTypes: 'IntegratedTypes',
      serviceCode: 'ServiceCode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorDeliveryDataType: 'string',
      integratedTypes: 'string',
      serviceCode: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

