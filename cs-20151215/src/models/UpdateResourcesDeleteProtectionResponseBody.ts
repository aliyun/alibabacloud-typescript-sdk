// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourcesDeleteProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The namespace to which the resource belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Indicates the status of deletion protection. A value of true indicates that deletion protection is enabled and a value of false indicates that deletion protection is disabled.
   * 
   * @example
   * enable
   */
  protection?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0527ac9a-c899-4341-a21a-xxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The type of resource for which deletion protection is enabled or disabled.
   * 
   * @example
   * namespaces
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of resources whose deletion protection status is updated.
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

