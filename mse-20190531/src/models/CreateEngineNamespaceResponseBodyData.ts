// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEngineNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of configurations.
   * 
   * @example
   * 1
   */
  configCount?: number;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * f4fa5b81-2f26-4900-833a-7516b315ebb2
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
   * The display name of the namespace.
   * 
   * @example
   * dev
   */
  namespaceShowName?: string;
  /**
   * @remarks
   * The quota of configurations.
   * 
   * @example
   * 1
   */
  quota?: number;
  /**
   * @remarks
   * The number of active services.
   * 
   * @example
   * 3
   */
  serviceCount?: number;
  /**
   * @remarks
   * The type of the namespace. Valid values:
   * 
   * *   `0`: global configuration
   * *   `1`: default namespace
   * *   `2`: custom namespace
   * 
   * @example
   * 1
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
      serviceCount: 'number',
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

