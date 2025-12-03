// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AndroidShortPayload } from "./AndroidShortPayload";


export class SendByFilterShrinkRequest extends $dara.Model {
  androidPayloadShrink?: string;
  androidShortPayload?: AndroidShortPayload;
  channelPropertiesShrink?: string;
  description?: string;
  /**
   * @example
   * "where":{"and":[{"or":[{"app_version":">=1.0"}]}]}
   */
  filter?: string;
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
      androidPayloadShrink: 'AndroidPayload',
      androidShortPayload: 'AndroidShortPayload',
      channelPropertiesShrink: 'ChannelProperties',
      description: 'Description',
      filter: 'Filter',
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
      androidPayloadShrink: 'string',
      androidShortPayload: AndroidShortPayload,
      channelPropertiesShrink: 'string',
      description: 'string',
      filter: 'string',
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
    if(this.androidShortPayload && typeof (this.androidShortPayload as any).validate === 'function') {
      (this.androidShortPayload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

