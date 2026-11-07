// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want the results to be displayed. Valid values: zh (default): Chinese. en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The description of the namespace that you want to create for Microservices Governance.
   * 
   * @example
   * Test namespace 1.
   */
  describe?: string;
  /**
   * @remarks
   * The name of the namespace that you want to create for Microservices Governance.
   * 
   * @example
   * myNamespace
   */
  name?: string;
  /**
   * @remarks
   * The tag.
   */
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

