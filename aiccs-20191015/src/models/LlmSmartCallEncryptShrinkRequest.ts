// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallEncryptShrinkRequest extends $dara.Model {
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
  promptParamShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Parameters for the large language model\\"s opening statement.
   * 
   * @example
   * {"name":"小明","address":"浙江省杭州市"}
   */
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

