// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckStructureRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for requests and responses. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the asset resides. Valid values:
   * 
   * - cn-hangzhou: China
   * - ap-southeast-1: outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of task sources.
   */
  taskSources?: string[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskSources: 'TaskSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      regionId: 'string',
      taskSources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskSources)) {
      $dara.Model.validateArray(this.taskSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

