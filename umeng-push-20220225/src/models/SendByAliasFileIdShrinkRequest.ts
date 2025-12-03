// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendByAliasFileIdShrinkRequest extends $dara.Model {
  aliasType?: string;
  androidPayloadShrink?: string;
  androidShortPayloadShrink?: string;
  channelPropertiesShrink?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PF835431668603208261
   */
  fileId?: string;
  harmonyPayloadShrink?: string;
  iosPayloadShrink?: string;
  policyShrink?: string;
  /**
   * @example
   * true
   */
  productionMode?: boolean;
  receiptType?: number;
  /**
   * @example
   * https://msg.umeng.com/upush/receipt
   */
  receiptUrl?: string;
  thirdPartyId?: string;
  callbackParams?: string;
  static names(): { [key: string]: string } {
    return {
      aliasType: 'AliasType',
      androidPayloadShrink: 'AndroidPayload',
      androidShortPayloadShrink: 'AndroidShortPayload',
      channelPropertiesShrink: 'ChannelProperties',
      description: 'Description',
      fileId: 'FileId',
      harmonyPayloadShrink: 'HarmonyPayload',
      iosPayloadShrink: 'IosPayload',
      policyShrink: 'Policy',
      productionMode: 'ProductionMode',
      receiptType: 'ReceiptType',
      receiptUrl: 'ReceiptUrl',
      thirdPartyId: 'ThirdPartyId',
      callbackParams: 'callbackParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasType: 'string',
      androidPayloadShrink: 'string',
      androidShortPayloadShrink: 'string',
      channelPropertiesShrink: 'string',
      description: 'string',
      fileId: 'string',
      harmonyPayloadShrink: 'string',
      iosPayloadShrink: 'string',
      policyShrink: 'string',
      productionMode: 'boolean',
      receiptType: 'number',
      receiptUrl: 'string',
      thirdPartyId: 'string',
      callbackParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

