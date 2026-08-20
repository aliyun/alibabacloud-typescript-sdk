// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalFeishuMinuteRequest extends $dara.Model {
  /**
   * @remarks
   * The credential ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleCredentialId
   */
  credentialId?: string;
  /**
   * @remarks
   * The resource description.
   * 
   * @example
   * created by eventbridge
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The Lark Minutes token (unique identifier of the minutes record, required).
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  minuteToken?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * This parameter is required.
   * 
   * @example
   * _DevsAF_19df1a74-a740-449a-bd7a-9acb39e00f25
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1iSgnW4pARwoPUd5D5nuCNwiEiE
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'credentialId',
      description: 'description',
      directoryId: 'directoryId',
      minuteToken: 'minuteToken',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      description: 'string',
      directoryId: 'string',
      minuteToken: 'string',
      name: 'string',
      operatingObjectName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

