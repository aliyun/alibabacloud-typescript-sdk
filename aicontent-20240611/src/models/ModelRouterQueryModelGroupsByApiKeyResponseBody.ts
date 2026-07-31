// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelGroupDTO } from "./ModelGroupDto";


export class ModelRouterQueryModelGroupsByApiKeyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the department to which the key belongs.
   * 
   * @example
   * 1001
   */
  clientId?: number;
  /**
   * @remarks
   * The list of bound model groups.
   * 
   * @example
   * []
   */
  groups?: ModelGroupDTO[];
  /**
   * @remarks
   * The list of individually authorized model IDs.
   * 
   * @example
   * [200]
   */
  standaloneModelList?: number[];
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      groups: 'groups',
      standaloneModelList: 'standaloneModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
      groups: { 'type': 'array', 'itemType': ModelGroupDTO },
      standaloneModelList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.standaloneModelList)) {
      $dara.Model.validateArray(this.standaloneModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterQueryModelGroupsByApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   */
  data?: ModelRouterQueryModelGroupsByApiKeyResponseBodyData;
  /**
   * @remarks
   * The error message code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unknown error
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModelRouterQueryModelGroupsByApiKeyResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

