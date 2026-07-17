// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionCurrentVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The category. The default value is empty.
   * 
   * @example
   * general
   */
  category?: string;
  /**
   * @remarks
   * The industry. The default value is empty, which indicates the General-purpose Edition.
   * 
   * @example
   * ecommerce
   */
  domain?: string;
  /**
   * @remarks
   * The type of the feature. Valid values:
   * 
   * - PAAS (default)
   * 
   * - SAAS
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The model type. Different features correspond to different model types:
   * 
   * - CTR model: tf_checkpoint
   * 
   * - Popularity model: pop
   * 
   * - Category model: offline_inference
   * 
   * - Hotword model: offline_inference
   * 
   * - Hint model: offline_inference
   * 
   * - Drop-down suggestion model: offline_inference
   * 
   * - Word segmentation model: text
   * 
   * - Term weighting model: tf_checkpoint
   * 
   * This parameter is required.
   * 
   * @example
   * tf_checkpoint
   */
  modelType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      domain: 'domain',
      functionType: 'functionType',
      modelType: 'modelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      domain: 'string',
      functionType: 'string',
      modelType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

