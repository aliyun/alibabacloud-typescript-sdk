// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelPermissionsResponseBodyListPermissions extends $dara.Model {
  /**
   * @remarks
   * The model deployment permission. A value of true indicates that the model is authorized for deployment. A value of false indicates that the model is not authorized.
   * 
   * @example
   * true
   */
  deploy?: boolean;
  /**
   * @remarks
   * The model training permission. A value of true indicates that the model is authorized for fine-tuning. A value of false indicates that the model is not authorized.
   * 
   * @example
   * true
   */
  fineTune?: boolean;
  /**
   * @remarks
   * The model invocation permission. A value of true indicates that the model is authorized for inference. A value of false indicates that the model is not authorized.
   * 
   * @example
   * true
   */
  inference?: boolean;
  static names(): { [key: string]: string } {
    return {
      deploy: 'deploy',
      fineTune: 'fineTune',
      inference: 'inference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploy: 'boolean',
      fineTune: 'boolean',
      inference: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelPermissionsResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The model.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  /**
   * @remarks
   * The authorization status.
   */
  permissions?: ListModelPermissionsResponseBodyListPermissions;
  static names(): { [key: string]: string } {
    return {
      model: 'model',
      name: 'name',
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      name: 'string',
      permissions: ListModelPermissionsResponseBodyListPermissions,
    };
  }

  validate() {
    if(this.permissions && typeof (this.permissions as any).validate === 'function') {
      (this.permissions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is empty if the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter is invalid
   */
  errorMessage?: string;
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
   * The list of workspace permissions.
   */
  list?: ListModelPermissionsResponseBodyList[];
  /**
   * @remarks
   * The maximum number of records returned in a single call.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next request.
   * 
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 36045E0A-551D-592D-B1BC-4C56596CE59E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorMessage: 'errorMessage',
      httpStatusCode: 'httpStatusCode',
      list: 'list',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      list: { 'type': 'array', 'itemType': ListModelPermissionsResponseBodyList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

