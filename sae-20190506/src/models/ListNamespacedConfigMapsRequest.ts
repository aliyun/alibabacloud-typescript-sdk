// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacedConfigMapsRequest extends $dara.Model {
  /**
   * @remarks
   * cn-hangzhou
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

