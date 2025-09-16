// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSqlInstanceParamsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  combineParams?: string;
  comment?: string;
  /**
   * @example
   * select * from test
   */
  content?: string;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  dynamicParams?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719220182844
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  kvpairs?: string;
  /**
   * @example
   * 1
   */
  relatedTemplateId?: number;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  staticParams?: string;
  /**
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  templateParams?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      combineParams: 'combineParams',
      comment: 'comment',
      content: 'content',
      dynamicParams: 'dynamicParams',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      instanceId: 'instanceId',
      kvpairs: 'kvpairs',
      relatedTemplateId: 'relatedTemplateId',
      staticParams: 'staticParams',
      templateParams: 'templateParams',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineParams: 'string',
      comment: 'string',
      content: 'string',
      dynamicParams: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      instanceId: 'number',
      kvpairs: 'string',
      relatedTemplateId: 'number',
      staticParams: 'string',
      templateParams: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceParamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * InstanceVersionVO
   */
  result?: UpdateSqlInstanceParamsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateSqlInstanceParamsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

