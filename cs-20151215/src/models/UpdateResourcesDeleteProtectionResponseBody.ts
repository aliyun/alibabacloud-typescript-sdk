// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourcesDeleteProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The namespace of the resource.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The deletion protection status of the resource.
   * 
   * @example
   * enable
   */
  protection?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0527ac9a-c899-4341-a21a-xxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * namespaces
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of resources for which the deletion protection status is updated.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      protection: 'protection',
      requestId: 'requestId',
      resourceType: 'resource_type',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      protection: 'string',
      requestId: 'string',
      resourceType: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

