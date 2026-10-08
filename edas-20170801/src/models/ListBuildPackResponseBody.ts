// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBuildPackResponseBodyBuildPackListBuildPack extends $dara.Model {
  configId?: number;
  disabled?: boolean;
  feature?: string;
  imageId?: string;
  multipleTenant?: boolean;
  packVersion?: string;
  pandoraDesc?: string;
  pandoraDownloadUrl?: string;
  pandoraVersion?: string;
  pluginInfo?: string;
  scriptName?: string;
  scriptVersion?: string;
  supportFeatures?: string;
  tengineDownloadUrl?: string;
  tengineImageId?: string;
  tomcatDesc?: string;
  tomcatDownloadUrl?: string;
  tomcatPath?: string;
  tomcatVersion?: string;
  withTengine?: boolean;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      disabled: 'Disabled',
      feature: 'Feature',
      imageId: 'ImageId',
      multipleTenant: 'MultipleTenant',
      packVersion: 'PackVersion',
      pandoraDesc: 'PandoraDesc',
      pandoraDownloadUrl: 'PandoraDownloadUrl',
      pandoraVersion: 'PandoraVersion',
      pluginInfo: 'PluginInfo',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
      supportFeatures: 'SupportFeatures',
      tengineDownloadUrl: 'TengineDownloadUrl',
      tengineImageId: 'TengineImageId',
      tomcatDesc: 'TomcatDesc',
      tomcatDownloadUrl: 'TomcatDownloadUrl',
      tomcatPath: 'TomcatPath',
      tomcatVersion: 'TomcatVersion',
      withTengine: 'WithTengine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      disabled: 'boolean',
      feature: 'string',
      imageId: 'string',
      multipleTenant: 'boolean',
      packVersion: 'string',
      pandoraDesc: 'string',
      pandoraDownloadUrl: 'string',
      pandoraVersion: 'string',
      pluginInfo: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      supportFeatures: 'string',
      tengineDownloadUrl: 'string',
      tengineImageId: 'string',
      tomcatDesc: 'string',
      tomcatDownloadUrl: 'string',
      tomcatPath: 'string',
      tomcatVersion: 'string',
      withTengine: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildPackResponseBodyBuildPackList extends $dara.Model {
  buildPack?: ListBuildPackResponseBodyBuildPackListBuildPack[];
  static names(): { [key: string]: string } {
    return {
      buildPack: 'BuildPack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildPack: { 'type': 'array', 'itemType': ListBuildPackResponseBodyBuildPackListBuildPack },
    };
  }

  validate() {
    if(Array.isArray(this.buildPack)) {
      $dara.Model.validateArray(this.buildPack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildPackResponseBody extends $dara.Model {
  buildPackList?: ListBuildPackResponseBodyBuildPackList;
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FD4-*************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildPackList: 'BuildPackList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildPackList: ListBuildPackResponseBodyBuildPackList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.buildPackList && typeof (this.buildPackList as any).validate === 'function') {
      (this.buildPackList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

