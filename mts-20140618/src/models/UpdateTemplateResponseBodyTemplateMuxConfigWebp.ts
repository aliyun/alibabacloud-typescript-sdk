// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateResponseBodyTemplateMuxConfigWebp extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for GIF.
   * 
   * @example
   * 0
   */
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loop: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

