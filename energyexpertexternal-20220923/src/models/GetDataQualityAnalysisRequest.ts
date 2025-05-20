// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * Data quality assessment type: 1 is DQI and 2 is DQR.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataQualityEvaluationType?: number;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataQualityEvaluationType: 'dataQualityEvaluationType',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataQualityEvaluationType: 'number',
      productId: 'number',
      productType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

