// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTokenPlanKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * acc_123456789
   */
  accountId?: string;
  /**
   * @remarks
   * The account ID of the caller that identifies the initiator of this call.
   * 
   * @example
   * acc_123456789
   */
  callerUacAccountId?: string;
  /**
   * @remarks
   * The description of the key.
   * 
   * @example
   * APIKEY描述
   */
  description?: string;
  /**
   * @remarks
   * The product namespace ID. For the TokenPlan product, this field is fixed to namespace-1.
   * 
   * @example
   * namespace-1
   */
  namespaceId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws_123456789
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      callerUacAccountId: 'CallerUacAccountId',
      description: 'Description',
      namespaceId: 'NamespaceId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      callerUacAccountId: 'string',
      description: 'string',
      namespaceId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

