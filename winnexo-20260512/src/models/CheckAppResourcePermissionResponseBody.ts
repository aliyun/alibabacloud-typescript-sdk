// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAppResourcePermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the target user has the permission on the resource.
   * 
   * @example
   * true
   */
  allowed?: boolean;
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error description. This field is empty if the request is successful.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The target permission.
   * 
   * @example
   * APP/VIEW
   */
  permission?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The dot-separated resource key. The first segment is the APP application key.
   * 
   * @example
   * app.demo.resource_1
   */
  resourceKey?: string;
  /**
   * @remarks
   * The resource type. Set the value to APP_RESOURCE.
   * 
   * @example
   * APP_RESOURCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allowed: 'allowed',
      code: 'code',
      message: 'message',
      permission: 'permission',
      requestId: 'requestId',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowed: 'boolean',
      code: 'string',
      message: 'string',
      permission: 'string',
      requestId: 'string',
      resourceKey: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

