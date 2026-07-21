// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateBillingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The billing type. The value must be `configurable`.
   * 
   * @example
   * configurable
   */
  billingType?: string;
  /**
   * @remarks
   * The effective time, in RFC3339 format.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The expiration time, in RFC3339 format.
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * The `pricingConfig` is a JSON object whose internal field structure varies depending on the billing type.
   * 
   * 1. **Tiered token billing**<br>Applicable to chat models. This type uses tiered pricing based on the number of input tokens and supports different rates for standard mode, thinking mode, and cache hits.<br>JSON format:<br><br><br>
   * 
   *    Field descriptions:Constraints:
   * 
   * 2. **Per-image billing**<br>Applicable to `ImageGeneration` and `ImageEdit` models. Billing is based on the number of images generated or processed.<br>JSON format:<br><br><br>
   * 
   *    Field descriptions:
   * 
   * 3. **Video matrix billing**<br>Applicable to `VideoGeneration` and `VideoImageGeneration` models. Pricing is based on a combination of video resolution and the presence of an audio track.<br>Note: While the frontend UI may use a `matrix` field, API calls must use the `tiers` field to save the configuration. The `matrix` field is automatically converted to `tiers` on the server side. The format below is the standard API format.<br>JSON format:<br><br><br><br>
   * 
   *    Field descriptions:Constraints:
   * 
   * 4. **Billing by duration**<br>Applicable to automatic speech recognition (ASR) models. Billing is based on the audio duration.<br>JSON format:<br><br><br>
   * 
   *    Field descriptions:
   * 
   * 5. **Per-character billing**<br>Applicable to text-to-speech (TTS) models. Billing is based on the number of characters in the synthesized text.<br>JSON format:<br><br><br>
   * 
   *    Field descriptions:
   * 
   * 6. **Flat-rate token billing**<br>Applicable to models such as `Embedding`, `Rerank`, `MultimodalEmbedding`, and `MultimodalRerank`. This type uses a flat-rate pricing model without tiers.<br>JSON format:<br><br><br>
   * 
   *    Field descriptions:
   * 
   * 7. **Full-modal multi-dimensional billing**<br>Applicable to full-modal models such as `ChatFullmodal` (e.g., `qwen3.5-omni-plus`). It sets separate prices for the input and output of different modalities, such as text, audio, images, and video.<br>JSON format:<br><br><br>
   * 
   *    Field descriptions:
   * 
   * @example
   * {
   * 				"tiers":[
   * 					{
   * 						"input_price":2.5,
   * 						"cached_input_price":2.5,
   * 						"max_tokens":32000,
   * 						"output_price":10,
   * 						"thinking_output_price":10,
   * 						"thinking_input_price":2.5,
   * 						"min_tokens":0
   * 					},
   * 					{
   * 						"input_price":4,
   * 						"cached_input_price":4,
   * 						"max_tokens":128000,
   * 						"output_price":16,
   * 						"thinking_output_price":16,
   * 						"thinking_input_price":4,
   * 						"min_tokens":32000
   * 					},
   * 					{
   * 						"input_price":7,
   * 						"cached_input_price":7,
   * 						"max_tokens":252000,
   * 						"output_price":28,
   * 						"thinking_output_price":28,
   * 						"thinking_input_price":7,
   * 						"min_tokens":128000
   * 					}
   * 				]
   * 			}
   */
  pricingConfig?: any;
  /**
   * @remarks
   * The billing rule version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      billingType: 'billingType',
      effectiveTime: 'effectiveTime',
      expireTime: 'expireTime',
      modelId: 'modelId',
      pricingConfig: 'pricingConfig',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      effectiveTime: 'string',
      expireTime: 'string',
      modelId: 'number',
      pricingConfig: 'any',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

