// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPluginsResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * ***
   */
  configItems?: string;
  /**
   * @example
   * fail to decode json
   */
  desc?: string;
  /**
   * @example
   * always
   */
  display?: number;
  /**
   * @example
   * True
   */
  enabled?: number;
  /**
   * @example
   * pre
   */
  env?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 1740479834
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * []
   */
  hooks?: string;
  /**
   * @example
   * @lALPM2AwTOg9IUHNAUDNAUA
   */
  icon?: string;
  /**
   * @example
   * 16257
   */
  id?: number;
  /**
   * @example
   * false
   */
  isDeleted?: number;
  /**
   * @example
   * 文件名
   */
  name?: string;
  /**
   * @example
   * header
   */
  skillHeader?: string;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  module?: ListAppPluginsResponseBodyModule[];
  /**
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
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
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

