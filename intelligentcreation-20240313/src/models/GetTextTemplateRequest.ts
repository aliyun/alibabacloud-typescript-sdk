// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextTemplateRequest extends $dara.Model {
  /**
   * @example
   * Car
   */
  industry?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

