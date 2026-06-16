// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleDataRequest extends $dara.Model {
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
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * - **ALL**: all encryption
   * - **LABEL**: label encryption
   * - **NONE**: no encryption.
   * 
   * @example
   * LABEL
   */
  encryptType?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 注册样本
   */
  name?: string;
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
   * The specified risk value.
   * 
   * @example
   * black
   */
  riskValue?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * PHONE
   */
  scene?: string;
  /**
   * @remarks
   * The storage path.
   * 
   * @example
   * saf/de/sample/3dc2spspHKq4G3YI9d08
   */
  storePath?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * OSS
   */
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      description: 'description',
      encryptType: 'encryptType',
      name: 'name',
      regId: 'regId',
      riskValue: 'riskValue',
      scene: 'scene',
      storePath: 'storePath',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      description: 'string',
      encryptType: 'string',
      name: 'string',
      regId: 'string',
      riskValue: 'string',
      scene: 'string',
      storePath: 'string',
      storeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

