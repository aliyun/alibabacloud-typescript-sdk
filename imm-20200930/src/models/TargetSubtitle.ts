// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetSubtitleExtractSubtitle extends $dara.Model {
  format?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetSubtitle extends $dara.Model {
  disableSubtitle?: boolean;
  extractSubtitle?: TargetSubtitleExtractSubtitle;
  stream?: number[];
  static names(): { [key: string]: string } {
    return {
      disableSubtitle: 'DisableSubtitle',
      extractSubtitle: 'ExtractSubtitle',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableSubtitle: 'boolean',
      extractSubtitle: TargetSubtitleExtractSubtitle,
      stream: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.extractSubtitle && typeof (this.extractSubtitle as any).validate === 'function') {
      (this.extractSubtitle as any).validate();
    }
    if(Array.isArray(this.stream)) {
      $dara.Model.validateArray(this.stream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

