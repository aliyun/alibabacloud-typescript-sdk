// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelPermissionsResponseBodyListPermissions extends $dara.Model {
  /**
   * @remarks
   * The model deployment authorization. A value of true indicates that the model has been granted authorization. A value of false indicates that the model has not been granted authorization.
   * 
   * @example
   * true
   */
  deploy?: boolean;
  /**
   * @remarks
   * The model training authorization. A value of true indicates that the model has been granted training authorization. A value of false indicates that the model has not been granted authorization.
   * 
   * @example
   * true
   */
  fineTune?: boolean;
  /**
   * @remarks
   * Indicates whether the model has inference permission. A value of true indicates that the model is authorized. A value of false indicates that the model is not authorized.
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
   * The model name.
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
   * The error code. This value is empty when the call is successful.
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
   * The maximum number of entries returned per request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next request.
   * 
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique request ID.
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
   * The total number of entries.
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

