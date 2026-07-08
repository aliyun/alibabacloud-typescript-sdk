// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPluginsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The plug-in code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The configuration form in React JSON Schema format.
   * 
   * @example
   * ***
   */
  configItems?: string;
  /**
   * @remarks
   * The plug-in description.
   * 
   * @example
   * fail to decode json
   */
  desc?: string;
  /**
   * @remarks
   * The image display mode. Valid values:
   * 
   * - **0** (None): Not displayed.
   * - **1** (Always): Always displayed.
   * 
   * @example
   * always
   */
  display?: number;
  /**
   * @remarks
   * Specifies whether scheduled delivery of resource snapshots is enabled.
   * 
   * Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * True
   */
  enabled?: number;
  /**
   * @remarks
   * The environment.
   * 
   * @example
   * pre
   */
  env?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 1740479834
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The hook definitions.
   * 
   * @example
   * []
   */
  hooks?: string;
  /**
   * @remarks
   * The plug-in description.
   * 
   * @example
   * @lALPM2AwTOg9IUHNAUDNAUA
   */
  icon?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 16257
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the entry is deleted. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * false
   */
  isDeleted?: number;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * 文件名
   */
  name?: string;
  /**
   * @remarks
   * The skill header information for model selection.
   * 
   * @example
   * header
   */
  skillHeader?: string;
  /**
   * @remarks
   * The category labels.
   * 
   * @example
   * [{\\"Key\\": \\"kubernetes.io/cluster-id\\", \\"Value\\": \\"cc67198b13db948c9848599654da5586e\\"}, {\\"Key\\": \\"created-by\\", \\"Value\\": \\"alibabacloud-imagecache-controller\\"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      configItems: 'ConfigItems',
      desc: 'Desc',
      display: 'Display',
      enabled: 'Enabled',
      env: 'Env',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hooks: 'Hooks',
      icon: 'Icon',
      id: 'Id',
      isDeleted: 'IsDeleted',
      name: 'Name',
      skillHeader: 'SkillHeader',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      configItems: 'string',
      desc: 'string',
      display: 'number',
      enabled: 'number',
      env: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      hooks: 'string',
      icon: 'string',
      id: 'number',
      isDeleted: 'number',
      name: 'string',
      skillHeader: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name to query.
   * 
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the `%s` variable in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the DtsJobId request parameter is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error arguments.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The number of entries per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response object.
   */
  module?: ListAppPluginsResponseBodyModule[];
  /**
   * @remarks
   * The token for the next query. This parameter is empty if no more results are available.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The exception message.
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * True
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      maxResults: 'MaxResults',
      module: 'Module',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      maxResults: 'number',
      module: { 'type': 'array', 'itemType': ListAppPluginsResponseBodyModule },
      nextToken: 'string',
      requestId: 'string',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

