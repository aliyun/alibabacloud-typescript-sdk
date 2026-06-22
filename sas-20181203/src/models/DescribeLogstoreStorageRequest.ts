// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogstoreStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the request source. Set this parameter to **sas**.
   * 
   * This parameter is required.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The language type of the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
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

