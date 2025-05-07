// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace in which the Secrets reside. By default, the namespace ID is the same as the region ID.
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

