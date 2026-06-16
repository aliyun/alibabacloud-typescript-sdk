// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskGroupRequest extends $dara.Model {
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
   * The language of the error message returned by the API. Valid values: zh: Chinese; en: English. The default value is en.
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
   * The area encoding.
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
   * TEst
   */
  sampleName?: string;
  /**
   * @remarks
   * Task group name.
   * 
   * @example
   * TeskGroupTest
   */
  taskGroupName?: string;
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
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      regId: 'RegId',
      sampleName: 'SampleName',
      taskGroupName: 'TaskGroupName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      regId: 'string',
      sampleName: 'string',
      taskGroupName: 'string',
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

