// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPluginsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The code of the plugin.
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
   * The description of the plugin.
   * 
   * @example
   * fail to decode json
   */
  desc?: string;
  /**
   * @remarks
   * Specifies whether to display the image. Valid values:
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
   * Specifies whether to enable scheduled delivery of resource snapshots.
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
   * The creation time. The value is a UNIX timestamp in seconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 1740479834
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time in ISO 8601 format in the UTC time zone.
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
   * The description of the plugin.
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
   * Indicates whether the item is deleted. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * false
   */
  isDeleted?: number;
  /**
   * @remarks
   * The name of the plugin.
   * 
   * @example
   * Filename
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
   * The category tags.
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
   * The detailed reason why access is denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether a retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application to query.
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
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The returned error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The maximum number of results to return per query.
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
   * The token used to start the next query. This parameter is empty if no more results are available.
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
   * System exception
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

