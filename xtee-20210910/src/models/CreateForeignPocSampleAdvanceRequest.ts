// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CreateForeignPocSampleAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * OSS path of the file.
   * 
   * @example
   * saf/cpoc/953c883cde33b2e21d722eb661d26375/1779172027996_自动回溯测试 2605191.csv
   */
  fileObject?: Readable;
  /**
   * @remarks
   * Set the language type for requests and received messages. Default value is **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Area encoding.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * nemo-test
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
   * FINANCE
   */
  tab?: string;
  static names(): { [key: string]: string } {
    return {
      fileObject: 'File',
      lang: 'Lang',
      regId: 'RegId',
      remark: 'Remark',
      sampleName: 'SampleName',
      tab: 'Tab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileObject: 'Readable',
      lang: 'string',
      regId: 'string',
      remark: 'string',
      sampleName: 'string',
      tab: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

