// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCapabilityRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration description.
   * 
   * @example
   * 描述
   */
  itemDesc?: string;
  /**
   * @remarks
   * The configuration item.
   * 
   * @example
   * {
   *         "name": "知识库名称",
   *         "type": "aliyun-es",
   *         "endpoint": {
   *             "address": "http://xxxxx.es-serverless.aliyuncs.com:9200",
   *             "authorization": "xxx:ABCDxxxx",
   *             "network": {
   *                 "type": "public"
   *             },
   *             "region": ""
   *         },
   *         "function": {
   *             "indexName": "product_info",
   *             "queryType": "hybrid-search",
   *             "description": "金融理财产品知识库，理财产品名称列表及详细描述",
   *             "parameters": {
   *                 "properties": {
   *                     "query": {
   *                         "defaultValue": "",
   *                         "description": "理财产品名称或详细描述",
   *                         "type": "string"
   *                     }
   *                 },
   *                 "required": [
   *                     "query"
   *                 ]
   *             },
   *             "template": "{\\"query\\":{\\"multi_match\\":{\\"query\\":\\"${parameters.query}\\",\\"fields\\": [\\"*\\"]}}}",
   *             "type": "dsl",
   *             "embedding": {
   *                 "denseModel": "dense",
   *                 "sparseModel": "sparse",
   *                 "address": "address",
   *                 "authorization": "authorization"
   *             },
   *             "filter": "es或os语句",
   *             "size": 10
   *         }
   *     }
   */
  itemValue?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to validate the request parameters without applying the changes. Default value: false.
   * 
   * Valid values:
   * 
   * - **true**
   * 
   * - **false**.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      itemDesc: 'itemDesc',
      itemValue: 'itemValue',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemDesc: 'string',
      itemValue: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.itemValue) {
      $dara.Model.validateMap(this.itemValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

