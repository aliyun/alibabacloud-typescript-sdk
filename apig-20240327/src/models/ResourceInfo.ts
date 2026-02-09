// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceInfo extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * api-1nsu2d****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * test1023
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type. Valid values: HttpApi, Operation, GatewayRoute, Gateway, and GatewayDomain.
   * 
   * @example
   * HttpApi
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource version.
   * 
   * @example
   * 1.0.0
   */
  resourceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      resourceVersion: 'resourceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      resourceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

