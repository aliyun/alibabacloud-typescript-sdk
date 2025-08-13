// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleDataRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Encryption type
   * 
   * @example
   * LABEL
   */
  encryptType?: string;
  /**
   * @remarks
   * Name
   * 
   * @example
   * 注册样本
   */
  name?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Specified risk value
   * 
   * @example
   * black
   */
  riskValue?: string;
  /**
   * @remarks
   * Scene
   * 
   * @example
   * PHONE
   */
  scene?: string;
  /**
   * @remarks
   * Storage path
   * 
   * @example
   * saf/de/sample/3dc2spspHKq4G3YI9d08
   */
  storePath?: string;
  /**
   * @remarks
   * Storage type
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

