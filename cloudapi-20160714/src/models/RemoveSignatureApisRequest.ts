// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSignatureApisRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the APIs from which you want to unbind the signature key.
   * 
   * *   If this parameter is not specified, the signature key is unbound from all the APIs in the specified environment of the API group.
   * *   The IDs of the APIs that you want to manage. Separate multiple API IDs with commas (,). A maximum of 100 API IDs can be entered.
   * 
   * @example
   * 123
   */
  apiIds?: string;
  /**
   * @remarks
   * The ID of the API group to which the API that you want to manage belongs.
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
   * The ID of the signature key.
   * 
   * This parameter is required.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  signatureId?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **TEST**
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

