// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRandomPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The characters that are not included in the password to be generated.
   * 
   * Valid values:
   * 
   * ` Valid characters: 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ! \\"#$%&\\"()*+,-. /:;<=>? @[\\] your_project_id} ~  `.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * ABCabc
   */
  excludeCharacters?: string;
  /**
   * @remarks
   * Specifies whether to exclude lowercase letters.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  excludeLowercase?: string;
  /**
   * @remarks
   * Specifies whether to exclude digits.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  excludeNumbers?: string;
  /**
   * @remarks
   * Specifies whether to exclude special characters.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  excludePunctuation?: string;
  /**
   * @remarks
   * Specifies whether to exclude uppercase letters.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  excludeUppercase?: string;
  /**
   * @remarks
   * The number of bytes that the password to be generated contains.
   * 
   * Valid values: 8 to 128.
   * 
   * Default value: 32
   * 
   * @example
   * 32
   */
  passwordLength?: string;
  /**
   * @remarks
   * Specifies whether to include all the preceding character types.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  requireEachIncludedType?: string;
  static names(): { [key: string]: string } {
    return {
      excludeCharacters: 'ExcludeCharacters',
      excludeLowercase: 'ExcludeLowercase',
      excludeNumbers: 'ExcludeNumbers',
      excludePunctuation: 'ExcludePunctuation',
      excludeUppercase: 'ExcludeUppercase',
      passwordLength: 'PasswordLength',
      requireEachIncludedType: 'RequireEachIncludedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeCharacters: 'string',
      excludeLowercase: 'string',
      excludeNumbers: 'string',
      excludePunctuation: 'string',
      excludeUppercase: 'string',
      passwordLength: 'string',
      requireEachIncludedType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

