// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSampleRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @example
   * SampleTest
   */
  sampleName?: string;
  /**
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @example
   * SAF_CONSOLE
   */
  type?: string;
  /**
   * @example
   * 2023-03-09 14:45:26
   */
  uploadTimeEnd?: string;
  /**
   * @example
   * 2023-03-09 14:45:23
   */
  uploadTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      regId: 'RegId',
      sampleName: 'SampleName',
      tab: 'Tab',
      type: 'Type',
      uploadTimeEnd: 'UploadTimeEnd',
      uploadTimeStart: 'UploadTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      regId: 'string',
      sampleName: 'string',
      tab: 'string',
      type: 'string',
      uploadTimeEnd: 'string',
      uploadTimeStart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

