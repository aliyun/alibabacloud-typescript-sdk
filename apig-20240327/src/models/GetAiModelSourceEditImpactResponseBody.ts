// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiModelSourceEditImpactResponseBodyDataReferences extends $dara.Model {
  /**
   * @example
   * api-d00000000000000000000
   */
  apiId?: string;
  /**
   * @example
   * vm-d00000000000000000000
   */
  logicalModelId?: string;
  /**
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @example
   * api-d00000000000000000000
   */
  objectId?: string;
  /**
   * @example
   * LogicalModel
   */
  objectType?: string;
  /**
   * @example
   * SelectedModel
   */
  role?: string;
  /**
   * @example
   * hr-d00000000000000000000
   */
  routeId?: string;
  /**
   * @example
   * svc-d00000000000000000000
   */
  serviceId?: string;
  /**
   * @example
   * Draft
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'apiId',
      logicalModelId: 'logicalModelId',
      modelCardId: 'modelCardId',
      objectId: 'objectId',
      objectType: 'objectType',
      role: 'role',
      routeId: 'routeId',
      serviceId: 'serviceId',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      logicalModelId: 'string',
      modelCardId: 'string',
      objectId: 'string',
      objectType: 'string',
      role: 'string',
      routeId: 'string',
      serviceId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiModelSourceEditImpactResponseBodyData extends $dara.Model {
  cleanup?: string[];
  references?: GetAiModelSourceEditImpactResponseBodyDataReferences[];
  /**
   * @example
   * 1
   */
  sourceVersion?: number;
  static names(): { [key: string]: string } {
    return {
      cleanup: 'cleanup',
      references: 'references',
      sourceVersion: 'sourceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanup: { 'type': 'array', 'itemType': 'string' },
      references: { 'type': 'array', 'itemType': GetAiModelSourceEditImpactResponseBodyDataReferences },
      sourceVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cleanup)) {
      $dara.Model.validateArray(this.cleanup);
    }
    if(Array.isArray(this.references)) {
      $dara.Model.validateArray(this.references);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiModelSourceEditImpactResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: GetAiModelSourceEditImpactResponseBodyData;
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
      data: GetAiModelSourceEditImpactResponseBodyData,
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

