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

