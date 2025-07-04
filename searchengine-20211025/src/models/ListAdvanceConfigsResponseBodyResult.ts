// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAdvanceConfigsResponseBodyResultFiles } from "./ListAdvanceConfigsResponseBodyResultFiles";


export class ListAdvanceConfigsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * *   The type of the advanced configuration. Valid values: -ONLINE: online configuration
   * *   \\-ONLINE_CAVA: online Cava configuration
   * *   \\-ONLINE_PLUGIN: online plug-in configuration
   * *   \\-ONLINE_QUERY: query configuration
   * *   \\-OFFLINE_DICT: offline dictionary configuration
   * *   \\-OFFLINE_TABLE: offline table configuration
   * *   \\-OFFLINE_COMMON: offline configuration
   * *   \\-OFFLINE_PLUGIN: offline plug-in configuration
   * *   \\-OFFLINE_INDEX: index configuration
   * 
   * @example
   * ONLINE
   */
  advanceConfigType?: string;
  /**
   * @remarks
   * The content of the advanced configuration that is returned.
   * 
   * @example
   * {\\"url\\":\\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\\"}
   */
  content?: string;
  /**
   * @remarks
   * The type of the configuration content. Valid values: FILE, GIT, HTTP, and ODPS.
   * 
   * @example
   * FILE
   */
  contentType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who created the advanced configuration.
   * 
   * @example
   * 123456
   */
  creator?: string;
  /**
   * @remarks
   * The description of the advanced configuration.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The files.
   */
  files?: ListAdvanceConfigsResponseBodyResultFiles[];
  /**
   * @remarks
   * The name of the advanced configuration.
   * 
   * @example
   * my_index
   */
  name?: string;
  /**
   * @remarks
   * The status of the advanced configuration. Valid values: drafting: The advanced configuration is in the draft state. used: The advanced configuration is being used. unused: The advanced configuration is not used. trash: The advanced configuration is being deleted.
   * 
   * @example
   * drafting
   */
  status?: string;
  /**
   * @remarks
   * The time when the advanced configuration was updated.
   * 
   * @example
   * 1631070464000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      advanceConfigType: 'advanceConfigType',
      content: 'content',
      contentType: 'contentType',
      creator: 'creator',
      desc: 'desc',
      files: 'files',
      name: 'name',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceConfigType: 'string',
      content: 'string',
      contentType: 'string',
      creator: 'string',
      desc: 'string',
      files: { 'type': 'array', 'itemType': ListAdvanceConfigsResponseBodyResultFiles },
      name: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

