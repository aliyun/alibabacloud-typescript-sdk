// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBuildPackResponseBodyBuildPackListBuildPack extends $dara.Model {
  /**
   * @remarks
   * The build package number of EDAS Container.
   * 
   * @example
   * 57
   */
  configId?: number;
  /**
   * @remarks
   * Indicates whether the EDAS Container version is disabled. A disabled version cannot be configured for use.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The features of the EDAS Container version, which are released for public preview.
   * 
   * @example
   * “”
   */
  feature?: string;
  /**
   * @remarks
   * The ID of the base image that corresponds to EDAS Container.
   */
  imageId?: string;
  /**
   * @remarks
   * Indicates whether EDAS Container supports multitenancy.
   * 
   * @example
   * true
   */
  multipleTenant?: boolean;
  /**
   * @remarks
   * The version of the application.
   * 
   * @example
   * 3.5.6
   */
  packVersion?: string;
  /**
   * @remarks
   * The description of the Pandora container.
   * 
   * @example
   * test
   */
  pandoraDesc?: string;
  /**
   * @remarks
   * The download URL of the Pandora installer.
   * 
   * @example
   * http://edas.oss-cn-hangzhou.aliyuncs.com/edas-plugins/edas.sar.V3.5.6/taobao-hsf.tgz
   */
  pandoraDownloadUrl?: string;
  /**
   * @remarks
   * The version of the Pandora container.
   * 
   * @example
   * edas.public.sar.V3.5.6
   */
  pandoraVersion?: string;
  /**
   * @remarks
   * The description of the plug-in.
   * 
   * @example
   * 1
   */
  pluginInfo?: string;
  /**
   * @remarks
   * The name of the Shell script that runs EDAS Container.
   * 
   * @example
   * default
   */
  scriptName?: string;
  /**
   * @remarks
   * The version of the Shell script that runs EDAS Container.
   * 
   * @example
   * 1.0.3
   */
  scriptVersion?: string;
  /**
   * @remarks
   * The features supported by EDAS Container.
   * 
   * @example
   * tengine,fatjar,restful,eip_nodeport,dpath
   */
  supportFeatures?: string;
  /**
   * @remarks
   * The download URL of the Tengine installer.
   * 
   * @example
   * http://edas.oss-cn-hangzhou.aliyuncs.com/components/tengine/3.4.7/tengine.sh
   */
  tengineDownloadUrl?: string;
  /**
   * @remarks
   * The ID of the Tengine image that corresponds to EDAS Container.
   * 
   * @example
   * registry.aliyuncs.com/edas/****-*********-*****:*.*.*
   */
  tengineImageId?: string;
  /**
   * @remarks
   * The description of the Tomcat container.
   * 
   * @example
   * 1\\. The config-client plug-in is updated. The issue of unread cache in multitenancy scenarios is fixed. 2. The High-Speed Service Framework (HSF) plug-in is updated to fix the issue that the qos command of the Pandora container cannot be executed and the issue that the service address cannot be found if the HSF plug-in subscribes to an excessive number of services. 3. The Fastjson package is updated to the sec06 secure version in all plug-ins that use this package.
   */
  tomcatDesc?: string;
  /**
   * @remarks
   * The download URL of the Tomcat installer.
   * 
   * @example
   * http://edas.oss-cn-hangzhou.aliyuncs.com/edas-container/7.0.92/taobao-tomcat-production-7.0.92.tar.gz
   */
  tomcatDownloadUrl?: string;
  /**
   * @remarks
   * The directory of the Tomcat container.
   * 
   * @example
   * taobao-tomcat-production-7.0.59.3
   */
  tomcatPath?: string;
  /**
   * @remarks
   * The version of the Tomcat container.
   * 
   * @example
   * 8.5.63
   */
  tomcatVersion?: string;
  /**
   * @remarks
   * Indicates whether EDAS Container supports traffic management.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The returned versions of EDAS Container.
   */
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
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
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

