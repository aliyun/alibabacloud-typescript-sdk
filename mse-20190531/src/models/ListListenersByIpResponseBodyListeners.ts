// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersByIpResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * The ID of the data.
   * 
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The group.
   * 
   * @example
   * default
   */
  group?: string;
  /**
   * @remarks
   * The verification string.
   * 
   * @example
   * 23sdfdf
   */
  md5?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      md5: 'Md5',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      md5: 'string',
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

