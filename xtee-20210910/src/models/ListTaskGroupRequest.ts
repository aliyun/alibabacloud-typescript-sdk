// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskGroupRequest extends $dara.Model {
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
   * TEst
   */
  sampleName?: string;
  /**
   * @example
   * TeskGroupTest
   */
  taskGroupName?: string;
  /**
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

