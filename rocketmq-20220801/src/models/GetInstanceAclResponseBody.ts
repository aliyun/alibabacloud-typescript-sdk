// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAclResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authentication type of the instance.
   * 
   * Valid values:
   * 
   * *   apache_acl: open source access control list (ACL)
   * *   default: the default account of the instance
   * 
   * @example
   * apache_acl
   */
  aclType?: string;
  /**
   * @remarks
   * The type of operations that can be performed on the resource.
   */
  actions?: string[];
  /**
   * @remarks
   * The decision result of the authorization.
   * 
   * @example
   * Allow
   */
  decision?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address whitelists.
   */
  ipWhitelists?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource on which the permissions are granted.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource on which the permissions are granted.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * abc
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclType: 'aclType',
      actions: 'actions',
      decision: 'decision',
      instanceId: 'instanceId',
      ipWhitelists: 'ipWhitelists',
      regionId: 'regionId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      actions: { 'type': 'array', 'itemType': 'string' },
      decision: 'string',
      instanceId: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetInstanceAclResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * xxx
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * xxx
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
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
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstanceAclResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
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

