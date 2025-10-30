// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceSlsConfigsRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @example
   * [{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]
   */
  slsConfigs?: string;
  static names(): { [key: string]: string } {
    return {
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      slsConfigs: 'SlsConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameSpaceShortId: 'string',
      namespaceId: 'string',
      slsConfigs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

