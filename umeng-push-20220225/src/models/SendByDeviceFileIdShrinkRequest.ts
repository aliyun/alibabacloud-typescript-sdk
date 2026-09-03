// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendByDeviceFileIdShrinkRequest extends $dara.Model {
  androidPayloadShrink?: string;
  androidShortPayloadShrink?: string;
  channelPropertiesShrink?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  harmonyPayloadShrink?: string;
  iosPayloadShrink?: string;
  policyShrink?: string;
  productionMode?: boolean;
  receiptType?: number;
  receiptUrl?: string;
  thirdPartyId?: string;
  callbackParams?: string;
  static names(): { [key: string]: string } {
    return {
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

