// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallEncryptRequest extends $dara.Model {
  /**
   * @remarks
   * The application code for the large language model.
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
   * A user-defined ID for the outbound call.
   * 
   * @example
   * dsa*******sad
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Parameters for the large language model\\"s prompt.
   * 
   * @example
   * {"prompt":"推荐一部电影"}
   */
  promptParam?: { [key: string]: any };
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Parameters for the large language model\\"s opening statement.
   * 
   * @example
   * {"name":"小明","address":"浙江省杭州市"}
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

