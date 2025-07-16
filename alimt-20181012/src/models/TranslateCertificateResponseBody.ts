// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateCertificateResponseBodyDataTranslatedValues extends $dara.Model {
  key?: string;
  /**
   * @example
   * name
   */
  keyTranslation?: string;
  value?: string;
  /**
   * @example
   * Solemn
   */
  valueTranslation?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyTranslation: 'KeyTranslation',
      value: 'Value',
      valueTranslation: 'ValueTranslation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyTranslation: 'string',
      value: 'string',
      valueTranslation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class TranslateCertificateResponseBody extends $dara.Model {
  data?: TranslateCertificateResponseBodyData;
  /**
   * @example
   * 6640DE48-201C-4110-AE87-FB8FA34412B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TranslateCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

