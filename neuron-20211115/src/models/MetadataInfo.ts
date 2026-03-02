// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetadataInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  env?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * 1
   */
  namespaceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * product
   */
  namespaceName?: string;
  /**
   * @example
   * 1
   */
  orgId?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
      env: 'env',
      id: 'id',
      instanceId: 'instanceId',
      namespaceId: 'namespaceId',
      namespaceName: 'namespaceName',
      orgId: 'orgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      env: 'string',
      id: 'number',
      instanceId: 'number',
      namespaceId: 'number',
      namespaceName: 'string',
      orgId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

