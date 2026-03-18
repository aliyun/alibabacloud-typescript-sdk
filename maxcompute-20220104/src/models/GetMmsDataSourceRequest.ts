// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the description for the configuration items.
   * 
   * @example
   * en_US
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to obtain the specific configuration items of the data source.
   * 
   * @example
   * true
   */
  withConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      lang: 'lang',
      withConfig: 'withConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      withConfig: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

