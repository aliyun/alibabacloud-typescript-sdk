// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceShrinkRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  describe?: string;
  /**
   * @example
   * myNamespace
   */
  name?: string;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      describe: 'Describe',
      name: 'Name',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      describe: 'string',
      name: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

