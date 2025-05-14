// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallEncryptShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ADDFA32145
   */
  applicationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ADDFA32145
   */
  callerNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 140432432432243
   */
  encryptCalledNumber?: string;
  /**
   * @example
   * dsadsaasfdsad
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * {}
   */
  promptParamShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startWordParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      callerNumber: 'CallerNumber',
      encryptCalledNumber: 'EncryptCalledNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      promptParamShrink: 'PromptParam',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startWordParamShrink: 'StartWordParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      callerNumber: 'string',
      encryptCalledNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      promptParamShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startWordParamShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

