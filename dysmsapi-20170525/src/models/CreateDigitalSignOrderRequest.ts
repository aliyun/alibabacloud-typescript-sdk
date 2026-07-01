// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDigitalSignOrderRequest extends $dara.Model {
  /**
   * @remarks
   * Reserved for future use.
   * 
   * @example
   * example
   */
  extendMessage?: string;
  /**
   * @remarks
   * The qualification information. This object is required when you create a signature, or when you update a signature\\"s qualification information.
   * 
   * - qualificationCompanyName: Company name. The name can be up to 150 characters long. It cannot consist of only digits or contain symbols other than the middle dot (·), Chinese brackets (【】), Chinese parentheses (（）), English parentheses (()), and spaces.
   * 
   * - `qualificationOrganizationCode`: The 18-character Unified Social Credit Identifier (USCI). It must be an 18-digit code or a code that consists of 18 uppercase or lowercase letters and digits.
   * 
   * - `qualificationAdminName`: The name of the agent or legal representative. The name must be in Chinese.
   * 
   * - `qualificationAdminIDCard`: The 18-digit ID card number of the agent. Only PRC ID cards are supported.
   * 
   * - `qualificationLegalPersonName`: The name of the legal representative or agent.
   * 
   * - `qualificationLegalPersonIDCard`: The 18-digit ID card number of the legal representative. Only PRC ID cards are supported.
   * 
   * @example
   * {
   *   "qualificationCompanyName": "阿里阿巴",
   *   "qualificationOrganizationCode": "91330106MA2A0XABCD",
   *   "qualificationLegalPersonName": "张三",
   *   "qualificationLegalPersonIDCard": "110105199001011234",
   *   "qualificationAdminName": "李四",
   *   "qualificationAdminIDCard": "11010519900101****"
   * }
   */
  orderContext?: { [key: string]: any };
  /**
   * @remarks
   * The operation to perform on the signature. Valid values:
   * 
   * - `UPDATE_DIGITALSMS_SIGN`: Update a signature.
   * 
   * - `DELETE_DIGITALSMS_SIGN`: Delete a signature.
   * 
   * - `CREATE_DIGITALSMS_SIGN`: Create a signature.
   * 
   * @example
   * CREATE_DIGITALSMS_SIGN
   */
  orderType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the qualification.
   * 
   * @example
   * 41
   */
  qualificationId?: number;
  /**
   * @remarks
   * The version of the qualification.
   * 
   * @example
   * 49
   */
  qualificationVersion?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the signature.
   * 
   * @example
   * 80
   */
  signId?: number;
  /**
   * @remarks
   * The industry type. This parameter is required when you create or update a signature. It is optional when you delete a signature. Valid values:
   * 
   * - `0`: General (GENERAL)
   * 
   * - `1`: E-commerce and retail (ECOMMERCE)
   * 
   * @example
   * 0
   */
  signIndustry?: number;
  /**
   * @remarks
   * The signature name. This parameter is required for creating, updating, and deleting signatures.
   * 
   * 1. The name must be 2 to 16 characters in length.
   * 
   * 2. The name can contain Chinese characters, letters, and digits.
   * 
   * - Special characters are not allowed, including $, &, %, #, @, !, ^, \\*, (, ), _, +, -, =, {, }, [, ], |, ;, :, \\", ", <, >, ,, ., /, ?, \\~, and .
   * 
   * - The name cannot be only letters.
   * 
   * - The name cannot be only digits. Spaces are not allowed.
   * 
   * - Emojis are not allowed.
   * 
   * @example
   * 阿里云商城
   */
  signName?: string;
  /**
   * @remarks
   * The signature source. This parameter is required when you create or update a signature. It is optional when you delete a signature. Valid values:
   * 
   * - `0`: Enterprises and public institutions
   * 
   * - `2`: App
   * 
   * @example
   * 0
   */
  signSource?: number;
  /**
   * @remarks
   * The ID of the user who submits the order.
   * 
   * @example
   * 110000001750080
   */
  submitter?: string;
  static names(): { [key: string]: string } {
    return {
      extendMessage: 'ExtendMessage',
      orderContext: 'OrderContext',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      qualificationVersion: 'QualificationVersion',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signId: 'SignId',
      signIndustry: 'SignIndustry',
      signName: 'SignName',
      signSource: 'SignSource',
      submitter: 'Submitter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendMessage: 'string',
      orderContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderType: 'string',
      ownerId: 'number',
      qualificationId: 'number',
      qualificationVersion: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signId: 'number',
      signIndustry: 'number',
      signName: 'string',
      signSource: 'number',
      submitter: 'string',
    };
  }

  validate() {
    if(this.orderContext) {
      $dara.Model.validateMap(this.orderContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

