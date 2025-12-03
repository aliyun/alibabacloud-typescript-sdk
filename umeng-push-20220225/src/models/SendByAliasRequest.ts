// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AndroidPayload } from "./AndroidPayload";
import { AndroidShortPayload } from "./AndroidShortPayload";
import { ChannelProperties } from "./ChannelProperties";
import { HarmonyPayload } from "./HarmonyPayload";
import { IosPayload } from "./IosPayload";
import { Policy } from "./Policy";


export class SendByAliasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  alias?: string;
  aliasType?: string;
  androidPayload?: AndroidPayload;
  androidShortPayload?: AndroidShortPayload;
  channelProperties?: ChannelProperties;
  description?: string;
  harmonyPayload?: HarmonyPayload;
  iosPayload?: IosPayload;
  policy?: Policy;
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
      alias: 'Alias',
      aliasType: 'AliasType',
      androidPayload: 'AndroidPayload',
      androidShortPayload: 'AndroidShortPayload',
      channelProperties: 'ChannelProperties',
      description: 'Description',
      harmonyPayload: 'HarmonyPayload',
      iosPayload: 'IosPayload',
      policy: 'Policy',
      productionMode: 'ProductionMode',
      receiptType: 'ReceiptType',
      receiptUrl: 'ReceiptUrl',
      thirdPartyId: 'ThirdPartyId',
      callbackParams: 'callbackParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      aliasType: 'string',
      androidPayload: AndroidPayload,
      androidShortPayload: AndroidShortPayload,
      channelProperties: ChannelProperties,
      description: 'string',
      harmonyPayload: HarmonyPayload,
      iosPayload: IosPayload,
      policy: Policy,
      productionMode: 'boolean',
      receiptType: 'number',
      receiptUrl: 'string',
      thirdPartyId: 'string',
      callbackParams: 'string',
    };
  }

  validate() {
    if(this.androidPayload && typeof (this.androidPayload as any).validate === 'function') {
      (this.androidPayload as any).validate();
    }
    if(this.androidShortPayload && typeof (this.androidShortPayload as any).validate === 'function') {
      (this.androidShortPayload as any).validate();
    }
    if(this.channelProperties && typeof (this.channelProperties as any).validate === 'function') {
      (this.channelProperties as any).validate();
    }
    if(this.harmonyPayload && typeof (this.harmonyPayload as any).validate === 'function') {
      (this.harmonyPayload as any).validate();
    }
    if(this.iosPayload && typeof (this.iosPayload as any).validate === 'function') {
      (this.iosPayload as any).validate();
    }
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

