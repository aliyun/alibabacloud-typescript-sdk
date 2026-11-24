// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesDeleteProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace to which the resource to query belongs.
   * 
   * This parameter is required when ResourceType is set to services. If this parameter is not specified, the default namespace is used.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The names of the resources to query. Separate multiple resource names with commas (,).
   * 
   * - If ResourceType is set to namespaces, specify the namespace names. If this parameter is left empty, the deletion protection status of all namespaces in the cluster is queried.
   * 
   * - If ResourceType is set to services, this parameter is required. Specify the service names.
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

