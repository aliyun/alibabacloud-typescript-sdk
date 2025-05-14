// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesDeleteProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
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
   * The type of the resource.
   * 
   * @example
   * namespaces
   */
  resource?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled.
   * 
   * *   true: deletion protection is enabled.
   * *   false: deletion protection is disabled.
   * 
   * @example
   * false
   */
  protection?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      namespace: 'namespace',
      resource: 'resource',
      protection: 'protection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
      resource: 'string',
      protection: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

