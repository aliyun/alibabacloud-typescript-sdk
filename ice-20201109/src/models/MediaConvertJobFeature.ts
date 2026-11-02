// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertJobFeatureClipTimeSpan extends $dara.Model {
  duration?: string;
  end?: string;
  seek?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      end: 'End',
      seek: 'Seek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      end: 'string',
      seek: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobFeatureClip extends $dara.Model {
  configToClipFirstPart?: string;
  timeSpan?: MediaConvertJobFeatureClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      configToClipFirstPart: 'ConfigToClipFirstPart',
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configToClipFirstPart: 'string',
      timeSpan: MediaConvertJobFeatureClipTimeSpan,
    };
  }

  validate() {
    if(this.timeSpan && typeof (this.timeSpan as any).validate === 'function') {
      (this.timeSpan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobFeatureWatermarks extends $dara.Model {
  adaptive?: string;
  borderColor?: string;
  borderWidth?: string;
  content?: string;
  fontAlpha?: string;
  fontColor?: string;
  fontName?: string;
  fontSize?: string;
  height?: string;
  templateId?: string;
  type?: string;
  width?: string;
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'Adaptive',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      fontAlpha: 'FontAlpha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      height: 'Height',
      templateId: 'TemplateId',
      type: 'Type',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: 'string',
      borderColor: 'string',
      borderWidth: 'string',
      content: 'string',
      fontAlpha: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'string',
      height: 'string',
      templateId: 'string',
      type: 'string',
      width: 'string',
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobFeature extends $dara.Model {
  clip?: MediaConvertJobFeatureClip;
  metadata?: { [key: string]: string };
  watermarks?: MediaConvertJobFeatureWatermarks[];
  static names(): { [key: string]: string } {
    return {
      clip: 'Clip',
      metadata: 'Metadata',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clip: MediaConvertJobFeatureClip,
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      watermarks: { 'type': 'array', 'itemType': MediaConvertJobFeatureWatermarks },
    };
  }

  validate() {
    if(this.clip && typeof (this.clip as any).validate === 'function') {
      (this.clip as any).validate();
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.watermarks)) {
      $dara.Model.validateArray(this.watermarks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

