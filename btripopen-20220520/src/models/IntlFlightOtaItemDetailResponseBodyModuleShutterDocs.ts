// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOtaItemDetailResponseBodyModuleShutterDocs extends $dara.Model {
  contents?: string[];
  mainTitle?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'contents',
      mainTitle: 'main_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
      mainTitle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

