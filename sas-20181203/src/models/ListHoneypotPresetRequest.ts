// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotPresetRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the honeypot image.
   * 
   * @example
   * ruoyi
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * @example
   * d892b4fe-af0d-4486-ab2a-8a518045****
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the management node.
   * 
   * @example
   * Node1
   */
  nodeName?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The custom name of the honeypot template.
   * 
   * @example
   * mx-rouyi
   */
  presetName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      honeypotImageName: 'HoneypotImageName',
      lang: 'Lang',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      pageSize: 'PageSize',
      presetName: 'PresetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      honeypotImageName: 'string',
      lang: 'string',
      nodeId: 'string',
      nodeName: 'string',
      pageSize: 'number',
      presetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

