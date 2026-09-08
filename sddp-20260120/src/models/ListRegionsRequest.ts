// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsRequest extends $dara.Model {
  audited?: boolean;
  identified?: boolean;
  /**
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      audited: 'Audited',
      identified: 'Identified',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audited: 'boolean',
      identified: 'boolean',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

