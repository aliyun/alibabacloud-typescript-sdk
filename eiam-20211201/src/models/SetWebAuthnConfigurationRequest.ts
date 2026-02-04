// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWebAuthnConfigurationRequestAaguids extends $dara.Model {
  /**
   * @remarks
   * AAGUID
   * 
   * @example
   * adce0002-35bc-c60a-648b-0b25f1f05503
   */
  aaguid?: string;
  /**
   * @remarks
   * AAGUID名称
   * 
   * @example
   * Touch ID
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      aaguid: 'Aaguid',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aaguid: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWebAuthnConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * AAGUID及其名称列表
   */
  aaguids?: SetWebAuthnConfigurationRequestAaguids[];
  /**
   * @remarks
   * 是否开启AAGUID校验
   * 
   * @example
   * true
   */
  enableAaguidVerification?: boolean;
  /**
   * @remarks
   * 是否开启WebAuthn认证器MDS校验
   * 
   * @example
   * true
   */
  enableMetadataServiceVerification?: boolean;
  /**
   * @remarks
   * 是否允许用户自注册WebAuthn认证器
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableUserSelfRegistration?: boolean;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aaguids: 'Aaguids',
      enableAaguidVerification: 'EnableAaguidVerification',
      enableMetadataServiceVerification: 'EnableMetadataServiceVerification',
      enableUserSelfRegistration: 'EnableUserSelfRegistration',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aaguids: { 'type': 'array', 'itemType': SetWebAuthnConfigurationRequestAaguids },
      enableAaguidVerification: 'boolean',
      enableMetadataServiceVerification: 'boolean',
      enableUserSelfRegistration: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aaguids)) {
      $dara.Model.validateArray(this.aaguids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

