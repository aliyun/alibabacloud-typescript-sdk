// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveAISubtitleResponseBodySubtitleConfigsSubtitleConfigPositionNormalized extends $dara.Model {
  position?: number[];
  static names(): { [key: string]: string } {
    return {
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      position: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.position)) {
      $dara.Model.validateArray(this.position);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAISubtitleResponseBodySubtitleConfigsSubtitleConfigRulesRefer extends $dara.Model {
  rulesId?: string[];
  static names(): { [key: string]: string } {
    return {
      rulesId: 'RulesId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rulesId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.rulesId)) {
      $dara.Model.validateArray(this.rulesId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAISubtitleResponseBodySubtitleConfigsSubtitleConfig extends $dara.Model {
  bgColor?: string;
  bgWidthNormalized?: number;
  borderWidthNormalized?: number;
  description?: string;
  dstLanguage?: string;
  fontColor?: string;
  fontName?: string;
  fontSizeNormalized?: string;
  height?: string;
  maxLines?: number;
  positionNormalized?: DescribeLiveAISubtitleResponseBodySubtitleConfigsSubtitleConfigPositionNormalized;
  rulesRefer?: DescribeLiveAISubtitleResponseBodySubtitleConfigsSubtitleConfigRulesRefer;
  showSourceLan?: number;
  srcLanguage?: string;
  subtitleId?: string;
  subtitleName?: string;
  width?: string;
  wordPerline?: number;
  static names(): { [key: string]: string } {
    return {
      bgColor: 'BgColor',
      bgWidthNormalized: 'BgWidthNormalized',
      borderWidthNormalized: 'BorderWidthNormalized',
      description: 'Description',
      dstLanguage: 'DstLanguage',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSizeNormalized: 'FontSizeNormalized',
      height: 'Height',
      maxLines: 'MaxLines',
      positionNormalized: 'PositionNormalized',
      rulesRefer: 'RulesRefer',
      showSourceLan: 'ShowSourceLan',
      srcLanguage: 'SrcLanguage',
      subtitleId: 'SubtitleId',
      subtitleName: 'SubtitleName',
      width: 'Width',
      wordPerline: 'WordPerline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgColor: 'string',
      bgWidthNormalized: 'number',
      borderWidthNormalized: 'number',
      description: 'string',
      dstLanguage: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSizeNormalized: 'string',
      height: 'string',
      maxLines: 'number',
      positionNormalized: DescribeLiveAISubtitleResponseBodySubtitleConfigsSubtitleConfigPositionNormalized,
      rulesRefer: DescribeLiveAISubtitleResponseBodySubtitleConfigsSubtitleConfigRulesRefer,
      showSourceLan: 'number',
      srcLanguage: 'string',
      subtitleId: 'string',
      subtitleName: 'string',
      width: 'string',
      wordPerline: 'number',
    };
  }

  validate() {
    if(this.positionNormalized && typeof (this.positionNormalized as any).validate === 'function') {
      (this.positionNormalized as any).validate();
    }
    if(this.rulesRefer && typeof (this.rulesRefer as any).validate === 'function') {
      (this.rulesRefer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAISubtitleResponseBodySubtitleConfigs extends $dara.Model {
  subtitleConfig?: DescribeLiveAISubtitleResponseBodySubtitleConfigsSubtitleConfig[];
  static names(): { [key: string]: string } {
    return {
      subtitleConfig: 'SubtitleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleConfig: { 'type': 'array', 'itemType': DescribeLiveAISubtitleResponseBodySubtitleConfigsSubtitleConfig },
    };
  }

  validate() {
    if(Array.isArray(this.subtitleConfig)) {
      $dara.Model.validateArray(this.subtitleConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAISubtitleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5c6a2a0df228-4a64- af62-20e91b96****
   */
  requestId?: string;
  subtitleConfigs?: DescribeLiveAISubtitleResponseBodySubtitleConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subtitleConfigs: 'SubtitleConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subtitleConfigs: DescribeLiveAISubtitleResponseBodySubtitleConfigs,
    };
  }

  validate() {
    if(this.subtitleConfigs && typeof (this.subtitleConfigs as any).validate === 'function') {
      (this.subtitleConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

