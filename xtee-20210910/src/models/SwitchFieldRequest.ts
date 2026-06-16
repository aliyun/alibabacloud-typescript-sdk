// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchFieldRequest extends $dara.Model {
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
   * 250002
   */
  id?: number;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The field source. Valid values:
   * - **DEFINE**: custom
   * - **DEFAULT**: system default.
   * 
   * @example
   * DEFINE
   */
  source?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - **DISABLE**: disabled
   * - **ENABLE**: enabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      id: 'id',
      name: 'name',
      regId: 'regId',
      source: 'source',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      id: 'number',
      name: 'string',
      regId: 'string',
      source: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

