// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePocSampleRequest extends $dara.Model {
  /**
   * @remarks
   * File Name.
   * 
   * @example
   * P4911_2707.csv
   */
  fileName?: string;
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * saf/cpoc/953c883cde33b2e21d722eb661d26375/测试文件模板-通用.csv
   */
  fileUrl?: string;
  /**
   * @remarks
   * The language of the error message returned by the API. Valid values: zh: Chinese. en: English. The default value is en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The area encoding.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The remark for the topic. It can only contain letters, digits, underscores (_), and hyphens (-). The length must be 3 to 64 characters.
   * 
   * @example
   * cs-pub
   */
  remark?: string;
  /**
   * @remarks
   * Sample Name.
   * 
   * @example
   * SampleNameTest
   */
  sampleName?: string;
  /**
   * @remarks
   * Scenario.
   * 
   * @example
   * INTERNET
   */
  tab?: string;
  /**
   * @remarks
   * Access type.
   * 
   * @example
   * SAF_CONSOLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      lang: 'Lang',
      regId: 'RegId',
      remark: 'Remark',
      sampleName: 'SampleName',
      tab: 'Tab',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      lang: 'string',
      regId: 'string',
      remark: 'string',
      sampleName: 'string',
      tab: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

