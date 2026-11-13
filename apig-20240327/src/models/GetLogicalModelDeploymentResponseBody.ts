// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogicalModelDeploymentResponseBodyDataTargets extends $dara.Model {
  /**
   * @example
   * 7e4f52a9b0c34d16a268e913f5c2087b
   */
  configRevision?: string;
  /**
   * @example
   * env-d00000000000000000000
   */
  environmentId?: string;
  /**
   * @example
   * 目标模型配置不可用。
   */
  error?: string;
  /**
   * @example
   * api-d00000000000000000000
   */
  httpApiId?: string;
  /**
   * @example
   * {"binding":"Succeeded"}
   */
  stages?: { [key: string]: any };
  /**
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configRevision: 'configRevision',
      environmentId: 'environmentId',
      error: 'error',
      httpApiId: 'httpApiId',
      stages: 'stages',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRevision: 'string',
      environmentId: 'string',
      error: 'string',
      httpApiId: 'string',
      stages: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
    };
  }

  validate() {
    if(this.stages) {
      $dara.Model.validateMap(this.stages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicalModelDeploymentResponseBodyData extends $dara.Model {
  /**
   * @example
   * vm-d00000000000000000000
   */
  logicalModelId?: string;
  /**
   * @example
   * op-d00000000000000000000
   */
  operationId?: string;
  /**
   * @example
   * 1
   */
  revision?: number;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  targets?: GetLogicalModelDeploymentResponseBodyDataTargets[];
  static names(): { [key: string]: string } {
    return {
      logicalModelId: 'logicalModelId',
      operationId: 'operationId',
      revision: 'revision',
      status: 'status',
      targets: 'targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalModelId: 'string',
      operationId: 'string',
      revision: 'number',
      status: 'string',
      targets: { 'type': 'array', 'itemType': GetLogicalModelDeploymentResponseBodyDataTargets },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicalModelDeploymentResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: GetLogicalModelDeploymentResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetLogicalModelDeploymentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

