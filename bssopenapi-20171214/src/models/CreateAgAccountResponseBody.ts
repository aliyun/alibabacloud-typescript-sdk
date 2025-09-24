// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgAccountResponseBodyAgRelationDto extends $dara.Model {
  /**
   * @remarks
   * The ID of the account that is used to call the CreateAgAccount operation.
   * 
   * @example
   * 1785287436011964
   */
  mpk?: string;
  /**
   * @remarks
   * The ID of the account that is created.
   * 
   * @example
   * 1728240534507590
   */
  pk?: string;
  /**
   * @remarks
   * The role of the account that is created.
   * 
   * @example
   * admin-role
   */
  ramAdminRoleName?: string;
  /**
   * @remarks
   * The type of the relationship.
   * 
   * @example
   * FINACE_CLOUD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      pk: 'Pk',
      ramAdminRoleName: 'RamAdminRoleName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      pk: 'string',
      ramAdminRoleName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The relationship between the account that is used to call the CreateAgAccount operation and the account that is created.
   */
  agRelationDto?: CreateAgAccountResponseBodyAgRelationDto;
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * LOGIN_EMAIL_HAS_BEEN_USED
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * loginEmail=685741089H@chinaunicom.cn,has used
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EAE08A27-386C-579E-966D-8853EC3C5D0E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agRelationDto: 'AgRelationDto',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agRelationDto: CreateAgAccountResponseBodyAgRelationDto,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.agRelationDto && typeof (this.agRelationDto as any).validate === 'function') {
      (this.agRelationDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

