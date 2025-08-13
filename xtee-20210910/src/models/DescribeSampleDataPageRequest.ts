// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleDataPageRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * Content of the list entered in the text box
   * 
   * @example
   * 1770000000
   */
  dataValue?: string;
  /**
   * @remarks
   * Page size, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * Start time
   * 
   * @example
   * 1730429469000
   */
  updateBeginTime?: number;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 1730429469000
   */
  updateEndTime?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      dataValue: 'dataValue',
      pageSize: 'pageSize',
      regId: 'regId',
      updateBeginTime: 'updateBeginTime',
      updateEndTime: 'updateEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'number',
      dataValue: 'string',
      pageSize: 'number',
      regId: 'string',
      updateBeginTime: 'number',
      updateEndTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

