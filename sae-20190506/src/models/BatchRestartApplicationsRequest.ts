// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRestartApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The application IDs. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 00893b3a-0e24-45ed-be0c-1f20e07b****
   */
  appIds?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
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

