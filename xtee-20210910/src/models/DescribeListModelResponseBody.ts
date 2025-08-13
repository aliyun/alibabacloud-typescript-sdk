// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListModelResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Uploader ID.
   * 
   * @example
   * 011786
   */
  bucId?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2025-05-07T02:26:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * Model code.
   * 
   * @example
   * code
   */
  modelCode?: string;
  /**
   * @remarks
   * Unique identifier of the model in use.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
   * @remarks
   * Model name.
   * 
   * @example
   * custom_model
   */
  modelName?: string;
  /**
   * @remarks
   * Model scenario.
   * 
   * @example
   * custom_scene
   */
  modelScene?: string;
  /**
   * @remarks
   * Model status, values: -**ENABLED**: Enabled-**DISABLED**: Disabled
   * 
   * @example
   * ENABLED
   */
  modelStatus?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 0c8a3799-5ac8-434b-b255-e06edb35c05f
   */
  taskId?: string;
  /**
   * @remarks
   * Last update time of the model.
   * 
   * @example
   * 2024-11-18T02:07:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 1806507582222226
   */
  userId?: string;
  /**
   * @remarks
   * File name.
   * 
   * @example
   * saf-ai-1662519103706.csv
   */
  userLocalFileName?: string;
  static names(): { [key: string]: string } {
    return {
      bucId: 'bucId',
      createTime: 'createTime',
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelName: 'modelName',
      modelScene: 'modelScene',
      modelStatus: 'modelStatus',
      taskId: 'taskId',
      updateTime: 'updateTime',
      userId: 'userId',
      userLocalFileName: 'userLocalFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucId: 'string',
      createTime: 'string',
      modelCode: 'string',
      modelId: 'string',
      modelName: 'string',
      modelScene: 'string',
      modelStatus: 'string',
      taskId: 'string',
      updateTime: 'string',
      userId: 'string',
      userLocalFileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
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
   * Returned data.
   */
  resultObject?: DescribeListModelResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 1
   */
  totalItem?: string;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      totalItem: 'TotalItem',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      pageSize: 'string',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeListModelResponseBodyResultObject },
      totalItem: 'string',
      totalPage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

