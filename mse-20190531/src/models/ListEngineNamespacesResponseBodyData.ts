// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEngineNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 1
   */
  configCount?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * DEFAULT
   */
  namespace?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * mytest
   */
  namespaceDesc?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * public
   */
  namespaceShowName?: string;
  /**
   * @remarks
   * The quota.
   * 
   * @example
   * 200
   */
  quota?: number;
  /**
   * @remarks
   * The number of active services.
   * 
   * @example
   * 3
   */
  serviceCount?: string;
  /**
   * @remarks
   * The source from which the namespace was created.
   * 
   * @example
   * mse
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the namespace. Valid values:
   * 
   * *   `0`: global configuration
   * *   `1`: default namespace
   * *   `2`: custom namespace
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      configCount: 'ConfigCount',
      namespace: 'Namespace',
      namespaceDesc: 'NamespaceDesc',
      namespaceShowName: 'NamespaceShowName',
      quota: 'Quota',
      serviceCount: 'ServiceCount',
      sourceType: 'SourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCount: 'number',
      namespace: 'string',
      namespaceDesc: 'string',
      namespaceShowName: 'string',
      quota: 'number',
      serviceCount: 'string',
      sourceType: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

