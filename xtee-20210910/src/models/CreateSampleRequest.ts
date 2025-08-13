// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleRequest extends $dara.Model {
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
   * OSS client uploaded file name
   * 
   * @example
   * 样本文件.csv
   */
  clientFileName?: string;
  /**
   * @remarks
   * OSS client address
   * 
   * @example
   * sample/path
   */
  clientPath?: string;
  /**
   * @remarks
   * File type
   * 
   * @example
   * CSV
   */
  fileType?: string;
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
   * Sample tag
   * 
   * @example
   * rm0102
   */
  sampleTag?: string;
  /**
   * @remarks
   * Sample type
   * 
   * @example
   * PHONE
   */
  sampleType?: string;
  /**
   * @remarks
   * Sample values
   * 
   * @example
   * 1777000000,1777000001
   */
  sampleValues?: string;
  /**
   * @remarks
   * Upload type
   * 
   * @example
   * ANNEX
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      clientFileName: 'clientFileName',
      clientPath: 'clientPath',
      fileType: 'fileType',
      regId: 'regId',
      sampleTag: 'sampleTag',
      sampleType: 'sampleType',
      sampleValues: 'sampleValues',
      uploadType: 'uploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      clientFileName: 'string',
      clientPath: 'string',
      fileType: 'string',
      regId: 'string',
      sampleTag: 'string',
      sampleType: 'string',
      sampleValues: 'string',
      uploadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

