// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyMigrationTaskResponseBodyDataUnSupportedRouteRules extends $dara.Model {
  /**
   * @remarks
   * The namespaced name of the incompatible Ingress.
   * 
   * @example
   * default/my-ingress
   */
  name?: string;
  /**
   * @remarks
   * The summary of the incompatible rule, in the format of request URI → destination service.
   * 
   * @example
   * /api/v1/pets -> pet-service
   */
  rule?: string;
  /**
   * @remarks
   * The list of unsupported annotations on the Ingress.
   */
  unSupportedAnnotations?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      rule: 'rule',
      unSupportedAnnotations: 'unSupportedAnnotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rule: 'string',
      unSupportedAnnotations: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.unSupportedAnnotations)) {
      $dara.Model.validateArray(this.unSupportedAnnotations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMigrationTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether all routes are compatible and can be migrated.
   * 
   * @example
   * true
   */
  isSupported?: boolean;
  /**
   * @remarks
   * The description of the check result, such as the failure reason or incompatibility summary. This value is from the Istio validation Reason.
   * 
   * @example
   * all routes supported
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the check is successful, which means whether the Istiod query link is working properly.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of incompatible routes.
   */
  unSupportedRouteRules?: VerifyMigrationTaskResponseBodyDataUnSupportedRouteRules[];
  static names(): { [key: string]: string } {
    return {
      isSupported: 'isSupported',
      message: 'message',
      success: 'success',
      unSupportedRouteRules: 'unSupportedRouteRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSupported: 'boolean',
      message: 'string',
      success: 'boolean',
      unSupportedRouteRules: { 'type': 'array', 'itemType': VerifyMigrationTaskResponseBodyDataUnSupportedRouteRules },
    };
  }

  validate() {
    if(Array.isArray(this.unSupportedRouteRules)) {
      $dara.Model.validateArray(this.unSupportedRouteRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMigrationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: VerifyMigrationTaskResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CB85272A-5F04-58D7-BDE1-8BB5EB390CE1
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
      data: VerifyMigrationTaskResponseBodyData,
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

