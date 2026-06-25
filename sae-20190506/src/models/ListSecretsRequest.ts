// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace that contains the Secret. For the default namespace, use the region ID, such as `cn-beijing`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
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

