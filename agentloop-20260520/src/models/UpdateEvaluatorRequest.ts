// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEvaluatorRequest extends $dara.Model {
  /**
   * @remarks
   * The list of annotation marks.
   * 
   * @example
   * ["__en"]
   */
  annotations?: string[];
  /**
   * @remarks
   * The new version configuration. This parameter is typically required when `version` is specified.
   * 
   * @example
   * {"prompt":"请更严格地评估任务完成度"}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The evaluator description.
   * 
   * @example
   * 判断 Agent 是否完成用户任务
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 链路任务完成度
   */
  displayName?: string;
  /**
   * @remarks
   * The evaluator properties.
   * 
   * @example
   * {"agentEvaluatorMode":"raw_prompt"}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The new version number. If specified, a new version is created.
   * 
   * @example
   * 1.1.0
   */
  version?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * 优化评分说明
   */
  versionDescription?: string;
  /**
   * @remarks
   * The idempotency token. CloudSpec declares this query parameter, but the backend does not currently perform idempotency comparison.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      config: 'config',
      description: 'description',
      displayName: 'displayName',
      properties: 'properties',
      version: 'version',
      versionDescription: 'versionDescription',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': 'string' },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      displayName: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      version: 'string',
      versionDescription: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

