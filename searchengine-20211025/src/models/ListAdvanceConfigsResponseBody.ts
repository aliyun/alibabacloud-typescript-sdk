// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdvanceConfigsResponseBodyResultFiles extends $dara.Model {
  /**
   * @remarks
   * The absolute path.
   * 
   * @example
   * /path/wpd/nae
   */
  fullPathName?: string;
  /**
   * @remarks
   * Specifies whether the file is a directory. Valid values:
   * \\- \\`true\\`
   * \\- \\`false\\`
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * Specifies whether the file is a template. Valid values:
   * \\- \\`true\\`
   * \\- \\`false\\`
   * 
   * @example
   * true
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * file_name_1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * - ONLINE: online configuration
   * 
   * - ONLINE_CAVA: online Cava configuration
   * 
   * - ONLINE_PLUGIN: online plugin
   * 
   * - ONLINE_QUERY: query configuration
   * 
   * - OFFLINE_DICT: offline dictionary configuration
   * 
   * - OFFLINE_TABLE: offline table configuration
   * 
   * - OFFLINE_COMMON: common offline configuration
   * 
   * - OFFLINE_PLUGIN: offline plugin
   * 
   * - OFFLINE_INDEX: index configuration
   * 
   * @example
   * ONLINE
   */
  advanceConfigType?: string;
  /**
   * @remarks
   * The configuration content. This parameter is returned for HTTP and Git requests.
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
   * The ID of the user who created the configuration.
   * 
   * @example
   * 123456
   */
  creator?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Custom Description
   */
  desc?: string;
  /**
   * @remarks
   * A list of files.
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
   * The status of the advanced configuration. Valid values:
   * \\- \\`drafting\\`: The configuration is a draft.
   * \\- \\`used\\`: The configuration is in use.
   * \\- \\`unused\\`: The configuration is not in use.
   * \\- \\`trash\\`: The configuration is being deleted.
   * 
   * @example
   * drafting
   */
  status?: string;
  /**
   * @remarks
   * The update time.
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

export class ListAdvanceConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FB0325E-8C37-5525-96AC-0333523170A3
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListAdvanceConfigsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAdvanceConfigsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

