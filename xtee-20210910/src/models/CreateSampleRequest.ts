// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the file uploaded by the OSS client.
   * 
   * @example
   * 样本文件.csv
   */
  clientFileName?: string;
  /**
   * @remarks
   * The OSS client address.
   * 
   * @example
   * sample/path
   */
  clientPath?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * CSV
   */
  fileType?: string;
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
   * The label of the data sample.
   * 
   * @example
   * rm0102
   */
  sampleTag?: string;
  /**
   * @remarks
   * The type of the data sample.
   * 
   * @example
   * PHONE
   */
  sampleType?: string;
  /**
   * @remarks
   * The values of the data sample.
   * 
   * @example
   * 1777000000,1777000001
   */
  sampleValues?: string;
  /**
   * @remarks
   * The upload type.
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

