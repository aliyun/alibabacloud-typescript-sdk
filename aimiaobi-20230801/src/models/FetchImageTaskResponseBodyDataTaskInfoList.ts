// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FetchImageTaskResponseBodyDataTaskInfoListImageList } from "./FetchImageTaskResponseBodyDataTaskInfoListImageList";


export class FetchImageTaskResponseBodyDataTaskInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  imageList?: FetchImageTaskResponseBodyDataTaskInfoListImageList[];
  /**
   * @example
   * net-7eb32699000d4193a3c59fc64ae1e55f
   */
  taskId?: string;
  /**
   * @example
   * SUCCESSED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      imageList: 'ImageList',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      imageList: { 'type': 'array', 'itemType': FetchImageTaskResponseBodyDataTaskInfoListImageList },
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageList)) {
      $dara.Model.validateArray(this.imageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

