// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiPluginsResponseBodyApiPlugins extends $dara.Model {
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 这个插件是用来xxx.....
   */
  description?: string;
  /**
   * @remarks
   * Draft configuration
   * 
   * @example
   * {
   * 	"description": "测试-2",
   * 	"functionMeta": {
   * 		"failoverRegionWeight": 0.5,
   * 		"functionMetaId": "a9127136087e4172b31b8f400430d63b",
   * 		"functionName": "yongyu-stream-2",
   * 		"regionId": "cn-hangzhou"
   * 	},
   * 	"inputParams": [{
   * 		"debugValue": "1112",
   * 		"description": "测试",
   * 		"name": "test",
   * 		"required": false,
   * 		"type": "String",
   * 		"valueSource": "Var"
   * 	}],
   * 	"name": "测试插件01",
   * 	"outputParams": [{
   * 		"description": "直接返回API结果，并作为提示词输入给模型",
   * 		"name": "result",
   * 		"type": "String"
   * 	}],
   * 	"timeout": 5,
   * 	"transitionContent": "稍等，和您确认下信息。",
   * 	"type": "Function"
   * }
   */
  draftedConfigJson?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1666230851000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 1641891940000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 7c0e5b5e-a839-4999-8301-2c7d07a1f16f
   */
  instanceId?: string;
  /**
   * @remarks
   * Plugin name
   * 
   * @example
   * 这是一个插件
   */
  name?: string;
  /**
   * @remarks
   * Published configuration
   * 
   * @example
   * {
   * 	"description": "发布-2",
   * 	"functionMeta": {
   * 		"failoverRegionWeight": 0.5,
   * 		"functionMetaId": "c4af5815daaa485bb8118be6b2f14058",
   * 		"functionName": "yongyu-stream-2",
   * 		"regionId": "cn-hangzhou"
   * 	},
   * 	"inputParams": [{
   * 		"debugValue": "111",
   * 		"description": "发布",
   * 		"name": "test",
   * 		"required": false,
   * 		"type": "String",
   * 		"valueSource": "Var"
   * 	}],
   * 	"name": "发布插件",
   * 	"outputParams": [{
   * 		"description": "直接返回API结果，并作为提示词输入给模型",
   * 		"name": "result",
   * 		"type": "String"
   * 	}],
   * 	"timeout": 5,
   * 	"transitionContent": "稍等，和您确认下信息。",
   * 	"type": "Function"
   * }
   */
  publishedConfigJson?: string;
  /**
   * @remarks
   * Status.
   * 
   * - Drafted
   * 
   * - Published
   * 
   * - PublishedAndEdited
   * 
   * @example
   * Drafted
   */
  status?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * Function
   */
  type?: string;
  /**
   * @remarks
   * Unique plugin identifier
   * 
   * @example
   * e1a3c448-20cf-4586-8aa2-4cdca75f7c20
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      draftedConfigJson: 'DraftedConfigJson',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      name: 'Name',
      publishedConfigJson: 'PublishedConfigJson',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      draftedConfigJson: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceId: 'string',
      name: 'string',
      publishedConfigJson: 'string',
      status: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiPluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * API plugin list
   */
  apiPlugins?: ListApiPluginsResponseBodyApiPlugins[];
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API prompt message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries displayed per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates success
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of entries
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiPlugins: 'ApiPlugins',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPlugins: { 'type': 'array', 'itemType': ListApiPluginsResponseBodyApiPlugins },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiPlugins)) {
      $dara.Model.validateArray(this.apiPlugins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

