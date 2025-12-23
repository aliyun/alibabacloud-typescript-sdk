// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionCurrentVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The category. By default, this parameter is left empty.
   * 
   * @example
   * general
   */
  category?: string;
  /**
   * @remarks
   * The industry. By default, this parameter is left empty, which indicates General-purpose Edition.
   * 
   * @example
   * ecommerce
   */
  domain?: string;
  /**
   * @remarks
   * The type of the feature. Valid values:
   * 
   * *   PAAS. This is the default value.
   * *   SAAS.
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The type of the model. The following features correspond to different model types:
   * 
   * *   CTR model: tf_checkpoint
   * *   Popularity model: pop
   * *   Category model: offline_inference
   * *   Hotword model: offline_inference
   * *   Shading model: offline_inference
   * *   Drop-down suggestion model: offline_inference
   * *   Word segmentation model: text
   * *   Word weight model: tf_checkpoint
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

