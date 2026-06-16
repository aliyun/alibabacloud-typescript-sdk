// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 3144
   */
  id?: number;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  versions?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'id',
      regId: 'regId',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      regId: 'string',
      versions: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

