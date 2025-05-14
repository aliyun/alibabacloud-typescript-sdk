// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallEncryptRequest extends $dara.Model {
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
  promptParam?: { [key: string]: any };
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startWordParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      callerNumber: 'CallerNumber',
      encryptCalledNumber: 'EncryptCalledNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      promptParam: 'PromptParam',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startWordParam: 'StartWordParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      callerNumber: 'string',
      encryptCalledNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      promptParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startWordParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.promptParam) {
      $dara.Model.validateMap(this.promptParam);
    }
    if(this.startWordParam) {
      $dara.Model.validateMap(this.startWordParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

