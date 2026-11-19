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
   * The AAGUID name.
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
   * The list of AAGUIDs and their names.
   */
  aaguids?: SetWebAuthnConfigurationRequestAaguids[];
  /**
   * @remarks
   * Specifies whether AAGUID verification is enabled.
   * 
   * @example
   * true
   */
  enableAaguidVerification?: boolean;
  /**
   * @remarks
   * Specifies whether MDS verification is enabled for WebAuthn authenticators.
   * 
   * @example
   * true
   */
  enableMetadataServiceVerification?: boolean;
  /**
   * @remarks
   * Specifies whether users are allowed to self-register WebAuthn authenticators.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableUserSelfRegistration?: boolean;
  /**
   * @remarks
   * The instance ID.
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

