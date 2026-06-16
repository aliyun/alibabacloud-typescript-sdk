// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The sample type.
   * 
   * @example
   * PHONE
   */
  sampleType?: string;
  /**
   * @remarks
   * The sample data value.
   * 
   * @example
   * 1770000000
   */
  sampleValue?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      regId: 'regId',
      sampleType: 'sampleType',
      sampleValue: 'sampleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'number',
      pageSize: 'number',
      regId: 'string',
      sampleType: 'string',
      sampleValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

