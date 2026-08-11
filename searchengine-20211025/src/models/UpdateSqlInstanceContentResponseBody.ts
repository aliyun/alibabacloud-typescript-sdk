// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSqlInstanceContentResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The combined parameters.
   * 
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  combineParams?: string;
  /**
   * @remarks
   * The comments.
   * 
   * @example
   * Confirm and Execute
   */
  comment?: string;
  /**
   * @remarks
   * The SQL content.
   * 
   * @example
   * select * from test
   */
  content?: string;
  /**
   * @remarks
   * The dynamic parameters.
   * 
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  dynamicParams?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The parameters in the key-value pairs.
   * 
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  kvpairs?: string;
  /**
   * @remarks
   * The ID of the related template.
   * 
   * @example
   * 1
   */
  relatedTemplateId?: number;
  /**
   * @remarks
   * The static parameters.
   * 
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  staticParams?: string;
  /**
   * @remarks
   * The template parameters.
   * 
   * @example
   * {\\"trace\\":\\"INFO\\",\\"databaseName\\":\\"general\\",\\"iquan.plan.cache.enable\\":true,\\"iquan.plan.prepare.level\\":\\"jni.post.optimize\\",\\"urlencode_data\\":false,\\"formatType\\":\\"string\\",\\"timeout\\":1000}
   */
  templateParams?: string;
  /**
   * @remarks
   * The version number.
   * 
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

export class UpdateSqlInstanceContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned.
   */
  result?: UpdateSqlInstanceContentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateSqlInstanceContentResponseBodyResult,
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

