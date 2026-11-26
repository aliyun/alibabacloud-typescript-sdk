// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallEncryptRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the large language model application.
   * 
   * This parameter is required.
   * 
   * @example
   * AD******45
   */
  applicationCode?: string;
  /**
   * @remarks
   * The caller number.
   * 
   * This parameter is required.
   * 
   * @example
   * 132******65
   */
  callerNumber?: string;
  /**
   * @remarks
   * The encrypted called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 140*********243
   */
  encryptCalledNumber?: string;
  /**
   * @remarks
   * The custom outId specified by the customer.
   * 
   * @example
   * dsa*******sad
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The prompt parameters for the large language model application.
   * 
   * @example
   * {"prompt":"Recommend a movie"}
   */
  promptParam?: { [key: string]: any };
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The greeting parameters for the large language model application.
   * 
   * @example
   * {"name":"Xiao Ming","address":"Hangzhou, Zhejiang"}
   */
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

