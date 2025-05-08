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

