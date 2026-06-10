// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPluginsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * plugin code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Configuration form in React JSON Schema format
   * 
   * @example
   * ***
   */
  configItems?: string;
  /**
   * @remarks
   * plugin Description
   * 
   * @example
   * fail to decode json
   */
  desc?: string;
  /**
   * @remarks
   * Image display. Valid values:  
   * 
   * - **0** (None): Do not display.  
   * - **1** (Always): Always display.
   * 
   * @example
   * always
   */
  display?: number;
  /**
   * @remarks
   * Indicates whether scheduled delivery of resource snapshots is enabled.  
   * 
   * Valid values:  
   * - true: Enabled.  
   * - false: Shutdown.
   * 
   * @example
   * True
   */
  enabled?: number;
  /**
   * @remarks
   * environment
   * 
   * @example
   * pre
   */
  env?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 1740479834
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Updated At
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * hook definitions
   * 
   * @example
   * []
   */
  hooks?: string;
  /**
   * @remarks
   * plugin Description
   * 
   * @example
   * @lALPM2AwTOg9IUHNAUDNAUA
   */
  icon?: string;
  /**
   * @remarks
   * primary key
   * 
   * @example
   * 16257
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the item has been deleted: 0—No, 1—Yes
   * 
   * @example
   * false
   */
  isDeleted?: number;
  /**
   * @remarks
   * plugin Name
   * 
   * @example
   * 文件名
   */
  name?: string;
  /**
   * @remarks
   * skill header, used by the model for selection
   * 
   * @example
   * header
   */
  skillHeader?: string;
  /**
   * @remarks
   * Categorization label
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
   * Detailed reason for access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * Application name. Query the application with this name.
   * 
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message used to replace the `%s` placeholder in the **ErrMessage** error message.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the provided request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Number of results per query.  
   * 
   * Value range: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Returned object.
   */
  module?: ListAppPluginsResponseBodyModule[];
  /**
   * @remarks
   * Token for starting the next query. It is empty if there is no next query.
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
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * Abnormal message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Reserved parameter.
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

