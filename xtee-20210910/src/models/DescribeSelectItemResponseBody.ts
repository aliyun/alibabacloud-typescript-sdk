// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSelectItemResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Monitoring status list.
   */
  monitorStatusList?: string[];
  /**
   * @remarks
   * Task ID list.
   */
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      monitorStatusList: 'monitorStatusList',
      taskIdList: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorStatusList: { 'type': 'array', 'itemType': 'string' },
      taskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.monitorStatusList)) {
      $dara.Model.validateArray(this.monitorStatusList);
    }
    if(Array.isArray(this.taskIdList)) {
      $dara.Model.validateArray(this.taskIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSelectItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeSelectItemResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeSelectItemResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

