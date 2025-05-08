// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TranslateCertificateResponseBodyDataTranslatedValues } from "./TranslateCertificateResponseBodyDataTranslatedValues";


export class TranslateCertificateResponseBodyData extends $dara.Model {
  translatedValues?: TranslateCertificateResponseBodyDataTranslatedValues[];
  static names(): { [key: string]: string } {
    return {
      translatedValues: 'TranslatedValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translatedValues: { 'type': 'array', 'itemType': TranslateCertificateResponseBodyDataTranslatedValues },
    };
  }

  validate() {
    if(Array.isArray(this.translatedValues)) {
      $dara.Model.validateArray(this.translatedValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

