// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesDeleteProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace in which the resources that you want to query reside.
   * 
   * This parameter is required when you set resource_type to services. Default value: default.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The names of the resources that you want to query. Separate multiple resource names with commas (,).
   * 
   * *   When you set resource_type to namespaces, you must specify namespace names. If you leave this parameter empty, all namespaces in the cluster are queried.
   * *   If you set resource_type to services, you must specify Service names.
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

