// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetCreateLogoTaskResponseBodyTask extends $dara.Model {
  /**
   * @example
   * 604860995
   */
  taskId?: string;
  /**
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  urls?: string[];
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskStatus: 'string',
      urls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.urls)) {
      $dara.Model.validateArray(this.urls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

