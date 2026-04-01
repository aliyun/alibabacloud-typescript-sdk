// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the component action.
   * 
   * @example
   * doRequest
   */
  componentActionName?: string;
  /**
   * @remarks
   * Asset UUID.
   * 
   * @example
   * 1C5F11E9-****-51F0-****-43BB312A0557
   */
  componentAssetUuid?: string;
  /**
   * @remarks
   * Component input parameters.
   * 
   * @example
   * {}
   */
  componentInput?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * SLS
   */
  componentName?: string;
  /**
   * @remarks
   * The language type for requests and responses. Values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the node corresponding to the current component in the playbook.
   * 
   * @example
   * node1
   */
  playBookNodeName?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * > You can obtain this parameter by calling the [DescribePlaybooks](~~DescribePlaybooks~~) interface.
   * 
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

