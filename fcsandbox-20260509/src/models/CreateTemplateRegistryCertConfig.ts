// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRegistryCertConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip certificate verification.
   */
  insecure?: boolean;
  static names(): { [key: string]: string } {
    return {
      insecure: 'insecure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insecure: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

