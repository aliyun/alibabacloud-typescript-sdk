// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoRemakeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON object string for the original video input. The Type of the first item in Medias is video, and a MediaId or HTTP(S) URL is provided.
   * 
   * @example
   * {"Medias":[{"Type":"video","Url":"https://example.com/source.mp4"}]}
   */
  input?: string;
  /**
   * @remarks
   * The remake parameters in JSON string format. The structure is as follows:
   * 
   * - Product (Object, required): The product information, including the original and new products.
   *   - OriginalProductName (String, optional): The product or brand name in the original video, used to locate and replace mentions of the original product.
   *   - NewProduct (Object, required): The new product information.
   *     - ProductName (String, required): The product or brand name.
   *     - Description (String, optional): The product description.
   *     - ProductKnowledge (String, optional): The physical knowledge of the product, such as material and usage.
   *     - ProductImages (Array<String>, required): A non-empty list of new product images, where each item is an HTTP(S) URL.
   *     - SellingPoints (Array<String>, optional): The list of product selling points.
   *     - OriginalPrice (String, optional): The original price.
   *     - CurrentPrice (String, optional): The current price.
   *     - Discount (String, optional): The discount information, such as "$50 off for orders over $200" or "Buy one get one free".
   * - AvatarList (Array<Object>, optional): The character replacement list, supporting 1 to 5 items. Each item describes the replacement relationship between an original character and a new character. If this parameter is not passed or is an empty array, no characters are replaced.
   *   - OriginalAvatarImage (String, required for each item when there are multiple characters, optional for a single character): The reference image of the target character in the original video. An HTTP(S) URL or a registered image MediaId is supported. Duplicates are not allowed in the same list.
   *   - NewAvatarImages (Array<String>, required for each item): A non-empty list of reference images for the new character. An HTTP(S) URL or a registered image MediaId is supported.
   *   - AvatarName (String, optional for each item): The role name of the replaced character in the generated script.
   * - VoiceoverLanguage (String, optional): The voiceover language. Default value: zh.
   * - AdditionalRequirements (String, optional): Additional remake requirements.
   * 
   * This operation uses AvatarList and does not use the legacy Avatar or OriginalAvatarName from the standalone scripting interface. The two character structures are not interchangeable.
   * 
   * @example
   * {"Product":{"OriginalProductName":"Original product","NewProduct":{"ProductName":"New product","Description":"Product description","ProductImages":["https://example.com/product.jpg"]}},"AvatarList":[{"OriginalAvatarImage":"https://example.com/original.jpg","NewAvatarImages":["https://example.com/avatar.jpg"],"AvatarName":"Alice"}],"VoiceoverLanguage":"en"}
   */
  remakeParams?: string;
  /**
   * @remarks
   * The user-defined JSON object string, which is returned as-is when queried. NotifyAddress is the callback URL for the final state of the task.
   * 
   * @example
   * {"NotifyAddress":"https://example.com/callback","bizId":"remake_001"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      remakeParams: 'RemakeParams',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      remakeParams: 'string',
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

