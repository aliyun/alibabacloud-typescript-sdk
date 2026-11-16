// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitRemakeScriptJobRequest extends $dara.Model {
  /**
   * @remarks
   * The remake parameters in JSON string format. The structure varies based on `RemakeType`. For `faithful-remake`, the structure is as follows:
   * 
   * - ComprehensionResult (string, required): The URL of the JSON file that contains the content understanding results.
   * 
   * - Product (object, required): The product information, including the original and new products.
   * 
   *   - OriginalProductName (string, required): The name of the product or brand in the original video to be replaced. This is used to locate and replace mentions of the original product in the script.
   * 
   *   - NewProduct (object, required): The new product information. 
   * 
   *     - ProductName (string, required): The name of the product or brand.
   *     - Description (string, required): The product description.
   *     - ProductKnowledge (string, required): The physical knowledge of the product, such as the material and usage instructions.
   *     - ProductImages (array<string>, required): The images of the new product. This array cannot be empty, and each item must be an HTTP or HTTPS URL.
   *     - SellingPoints (array<string>, optional): The list of product selling points.
   *     - OriginalPrice (string, optional): The original price.
   *     - CurrentPrice (string, optional): The current price.
   *     - Discount (string, optional): The discount information, such as "50 off for orders over 200" or "Buy one get one free".
   * 
   * - Avatar (object, required): The avatar information, including the original and new avatars.
   * 
   *     - NewAvatarImages (array<string>, required): The list of new avatar images. This array cannot be empty, and each item must be a media asset ID or an image URL. If a URL is provided, the system automatically registers it as a media asset. **Currently, only one image is supported** (only the first element of the array is used). The array format is reserved for future extensions.
   *     - OriginalAvatarName (string, required): The name of the avatar in the original video to be replaced. This is used to locate and replace the original avatar in the script or visuals.
   * 
   * - VoiceoverLanguage (string, optional): The voiceover language. Valid values: `zh` (Chinese), `en` (English), `es` (Spanish), `pt` (Portuguese), `fr` (French), `de` (German), `ja` (Japanese), `ko` (Korean), and `ar` (Arabic). Default value: `zh`.
   * 
   * @example
   * {
   *     "ComprehensionResult": "http://xxxx.json",
   *     "Product":
   *     {
   *         "OriginalProductName": "xxxx",
   *         "NewProduct":
   *         {
   *             "ProductName": "xxxx",
   *             "Description": "xxxx",
   *             "ProductImages":
   *             [
   *                 "https://xxxx.png",
   *                 "https://xxxx.png",
   *                 "https://xxxx.png"
   *             ],
   *             "ProductKnowledge": "xxxx"
   *         }
   *     },
   *     "Avatar":
   *     {
   *         "NewAvatarImages":
   *         [
   *             "https://xxxx.png"
   *         ],
   *         "OriginalAvatarName": "xxxx"
   *     },
   *     "VoiceoverLanguage": "zh"
   * }
   */
  remakeParams?: string;
  /**
   * @remarks
   * The remake type, which determines the structure of `RemakeParams`. Currently, only `faithful-remake` is supported, which replicates the original hit video structure paragraph by paragraph and replaces the product and avatar.
   * 
   * @example
   * faithful-remake
   */
  remakeType?: string;
  /**
   * @remarks
   * The custom parameters in JSON string format. These parameters are returned as-is in the callback result, such as newsKey. The system reserves the NotifyAddress field for the callback URL, which is invoked after the task is completed.
   * 
   * @example
   * {"NotifyAddress": "http://xxx.callback.url"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      remakeParams: 'RemakeParams',
      remakeType: 'RemakeType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remakeParams: 'string',
      remakeType: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

