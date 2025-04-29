// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSignatureApisRequest extends $dara.Model {
  /**
   * @remarks
   * The API IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 3b81fd160f5645e097cc8855d75a1cf6,46fbb52840d146f186e38e8e70fc8c12
   */
  apiIds?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0009db9c828549768a200320714b8930
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The signature ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  signatureId?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the staging environment
   * *   **TEST**: the testing environment
   * 
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      signatureId: 'SignatureId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      groupId: 'string',
      securityToken: 'string',
      signatureId: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

