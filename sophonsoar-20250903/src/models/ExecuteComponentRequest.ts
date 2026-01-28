// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteComponentRequest extends $dara.Model {
  /**
   * @example
   * doRequest
   */
  componentActionName?: string;
  /**
   * @example
   * 1C5F11E9-****-51F0-****-43BB312A0557
   */
  componentAssetUuid?: string;
  /**
   * @example
   * {}
   */
  componentInput?: string;
  /**
   * @example
   * SLS
   */
  componentName?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * node1
   */
  playBookNodeName?: string;
  /**
   * @example
   * ac343acc-1a61-4084-9a1cxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      componentActionName: 'ComponentActionName',
      componentAssetUuid: 'ComponentAssetUuid',
      componentInput: 'ComponentInput',
      componentName: 'ComponentName',
      lang: 'Lang',
      playBookNodeName: 'PlayBookNodeName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentActionName: 'string',
      componentAssetUuid: 'string',
      componentInput: 'string',
      componentName: 'string',
      lang: 'string',
      playBookNodeName: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

