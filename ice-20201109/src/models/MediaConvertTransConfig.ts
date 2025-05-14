// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertTransConfig extends $dara.Model {
  adjDarMethod?: string;
  isCheckAudioBitrate?: boolean;
  isCheckAudioBitrateFail?: boolean;
  isCheckReso?: boolean;
  isCheckResoFail?: boolean;
  isCheckVideoBitrate?: boolean;
  isCheckVideoBitrateFail?: boolean;
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'boolean',
      isCheckAudioBitrateFail: 'boolean',
      isCheckReso: 'boolean',
      isCheckResoFail: 'boolean',
      isCheckVideoBitrate: 'boolean',
      isCheckVideoBitrateFail: 'boolean',
      transMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

