// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPropertiesResponseBodyDataConsoleConfig extends $dara.Model {
  /**
   * @example
   * xx
   */
  tipContent?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      tipContent: 'TipContent',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tipContent: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

