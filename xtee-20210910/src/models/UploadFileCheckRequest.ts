// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileCheckRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Sample batch name
   * 
   * @example
   * 白样本
   */
  batchName?: string;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * mobile
   */
  dataType?: string;
  /**
   * @remarks
   * Uploaded OSS address.
   * 
   * @example
   * sample/94b4193d321c44b44ee92b19984000a0/样本测试01/0d8dbc6809834d51b1d88a42295c803e/1753865835166.csv
   */
  ossFileName?: string;
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
   * Sample type
   * 
   * @example
   * 白名单
   */
  sampleTagType?: string;
  /**
   * @remarks
   * Service list
   * 
   * @example
   * account_abuse
   */
  serviceList?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      batchName: 'batchName',
      dataType: 'dataType',
      ossFileName: 'ossFileName',
      regId: 'regId',
      sampleTagType: 'sampleTagType',
      serviceList: 'serviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      batchName: 'string',
      dataType: 'string',
      ossFileName: 'string',
      regId: 'string',
      sampleTagType: 'string',
      serviceList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

