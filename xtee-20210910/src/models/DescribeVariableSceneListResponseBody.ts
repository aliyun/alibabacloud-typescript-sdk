// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableSceneListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The business category identifier.
   * 
   * @example
   * variable_scene
   */
  bizType?: string;
  /**
   * @remarks
   * The configuration item key.
   * 
   * @example
   * account_abuse_detection
   */
  configKey?: string;
  /**
   * @remarks
   * The configuration item value.
   * 
   * @example
   * 1
   */
  configValue?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1519714049632764
   */
  creator?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 配置描述信息
   */
  description?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The primary key ID of the configuration item.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The last modifier.
   * 
   * @example
   * 1519714049632764
   */
  lastModifiedOperator?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      configKey: 'configKey',
      configValue: 'configValue',
      creator: 'creator',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      lastModifiedOperator: 'lastModifiedOperator',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      configKey: 'string',
      configValue: 'string',
      creator: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      lastModifiedOperator: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVariableSceneListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
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
   * The returned object.
   */
  resultObject?: DescribeVariableSceneListResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resultObject: { 'type': 'array', 'itemType': DescribeVariableSceneListResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
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

