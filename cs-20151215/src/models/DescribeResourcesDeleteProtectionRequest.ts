// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesDeleteProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace of the resource to query.
   * 
   * This parameter is required when resource_type is set to services. If this parameter is not specified, the namespace defaults to default.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the resource to query. Separate multiple resources with commas (,).
   * 
   * - If resource_type is set to namespaces, set this parameter to namespace names. If this parameter is not specified, the deletion protection status of all namespaces in the cluster is queried.
   * 
   * - If resource_type is set to services, this parameter is required. Set this parameter to service names.
   * 
   * @example
   * test1,test2
   */
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      resources: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

