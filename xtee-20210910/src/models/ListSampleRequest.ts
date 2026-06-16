// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSampleRequest extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values: zh: Chinese. en: English. Default value: en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Area code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Sample name.
   * 
   * @example
   * SampleTest
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
  /**
   * @remarks
   * Access type.
   * 
   * @example
   * SAF_CONSOLE
   */
  type?: string;
  /**
   * @remarks
   * Upload end time.
   * 
   * @example
   * 2023-03-09 14:45:26
   */
  uploadTimeEnd?: string;
  /**
   * @remarks
   * Upload start time.
   * 
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

