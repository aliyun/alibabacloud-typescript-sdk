// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoRemakeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The input materials. The value is a JSON string with the following structure:
   * 
   * - Medias (Array<Object>, required): A non-empty list of media assets. This operation uses the first video in the list and does not support batch remakes. The first item contains the following fields:
   *   - Type (String, required): The type of the media asset. For this operation, set the value to video for the first item. The value is case-insensitive.
   *   - Url (String, mutually exclusive with MediaId): The URL of the media asset. The URL must start with http:// or https:// and cannot exceed 2,048 characters in length. Unregistered URLs are automatically registered as media assets.
   *   - MediaId (String, mutually exclusive with Url): The ID of the registered media asset. If both Url and MediaId are specified, MediaId takes precedence.
   * 
   * @example
   * {"Medias":[{"Type":"video","Url":"https://example.com/source.mp4"}]}
   */
  input?: string;
  /**
   * @remarks
   * The remake parameters. The value is a JSON string with the following structure:
   * 
   * - Product (Object, required): The product information, including the original product and the new product.
   *   - OriginalProductName (String, optional): The name of the product or brand in the original video. This is used to locate and replace mentions of the original product.
   *   - NewProduct (Object, required): The information about the new product.
   *     - ProductName (String, required): The name of the product or brand.
   *     - Description (String, optional): The description of the product.
   *     - ProductKnowledge (String, optional): The physical knowledge of the product, such as the material and usage.
   *     - ProductImages (Array\\<String\\>, required): The images of the new product. The list cannot be empty. Each item is an HTTP or HTTPS URL.
   *     - SellingPoints (Array\\<String\\>, optional): The list of selling points of the product.
   *     - OriginalPrice (String, optional): The original price.
   *     - CurrentPrice (String, optional): The current price.
   *     - Discount (String, optional): The discount information, such as "50 off for orders over 200" or "buy one get one free".
   * - AvatarList (Array\\<Object\\>, optional): The list of character replacements. Single-character and multi-character replacements are supported. Pass one item for single-character replacement and two to five items for multi-character replacement. Each item is an object that describes the replacement relationship between an original character and a new character. If this parameter is not passed or is an empty array, no characters are replaced.
   *   - OriginalAvatarImage (String, required for each item in multi-character replacement, optional for single-character replacement): The reference image of the target character in the original video. HTTP and HTTPS URLs or registered image MediaIds are supported. The value cannot be duplicated within the same list.
   *   - NewAvatarImages (Array\\<String\\>, required for each item): The list of reference images for the new character. The list cannot be empty. HTTP and HTTPS URLs or registered image MediaIds are supported.
   *   - AvatarName (String, optional for each item): The role name of the replaced character in the generated script.
   * - VoiceoverLanguage (String, optional): The voiceover language. Explicitly specify the language, such as zh for Chinese or en for English.
   * - AdditionalRequirements (String, optional): Additional remake requirements.
   * 
   * @example
   * {
   *   "Product": {
   *     "OriginalProductName": "Original Shapewear Bodysuit",
   *     "NewProduct": {
   *       "ProductName": "Compression Shapewear Bodysuit",
   *       "Description": "Description of the new product.",
   *       "ProductImages": [
   *         "https://example.com/product-front.png",
   *         "https://example.com/product-side.png",
   *         "https://example.com/product-back.png"
   *       ],
   *       "ProductKnowledge": "Product materials, physical characteristics, and usage instructions."
   *     }
   *   },
   *   "AvatarList": [
   *     {
   *       "OriginalAvatarImage": "https://example.com/original-avatar-a.png",
   *       "NewAvatarImages": [
   *         "https://example.com/new-avatar-a.png"
   *       ],
   *       "AvatarName": "Alice"
   *     },
   *     {
   *       "OriginalAvatarImage": "https://example.com/original-avatar-b.png",
   *       "NewAvatarImages": [
   *         "https://example.com/new-avatar-b.png"
   *       ],
   *       "AvatarName": "Bob"
   *     }
   *   ],
   *   "VoiceoverLanguage": "zh"
   * }
   */
  remakeParams?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {
   *   "NotifyAddress": "https://example.com/callback"
   * }
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

