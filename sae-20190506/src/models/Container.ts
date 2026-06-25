// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageRegistryConfig } from "./ImageRegistryConfig";
import { MetricsCollectConfig } from "./MetricsCollectConfig";
import { ContainerResources } from "./ContainerResources";
import { SLSCollectConfigs } from "./SlscollectConfigs";
import { StartupProbe } from "./StartupProbe";
import { WebNASConfig } from "./WebNasconfig";
import { WebOSSConfig } from "./WebOssconfig";


export class Container extends $dara.Model {
  /**
   * @remarks
   * Container startup arguments.
   * 
   * @example
   * ["abc", ">", "file0"]
   */
  args?: string;
  /**
   * @remarks
   * Container start command.
   * 
   * @example
   * ["/bin/sh"]
   */
  command?: string;
  /**
   * @remarks
   * Container environment variables.
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * Container image.
   * 
   * This parameter is required.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/serverless_devsxxxxx
   */
  image?: string;
  /**
   * @remarks
   * Image repository configuration.
   */
  imageRegistryConfig?: ImageRegistryConfig;
  /**
   * @remarks
   * Monitoring collection configuration.
   */
  metricsCollectConfig?: MetricsCollectConfig;
  /**
   * @remarks
   * Container port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Maximum concurrent requests per instance.
   * 
   * @example
   * 100
   */
  requestConcurrency?: number;
  /**
   * @remarks
   * Container request timeout, in seconds.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * Container resource configuration.
   * 
   * This parameter is required.
   */
  resources?: ContainerResources;
  /**
   * @remarks
   * Container log collection configuration.
   */
  SLSCollectConfigs?: SLSCollectConfigs;
  /**
   * @remarks
   * Container startup probe configuration.
   */
  startupProbe?: StartupProbe;
  /**
   * @remarks
   * Container NAS configuration.
   */
  webNASConfig?: WebNASConfig;
  /**
   * @remarks
   * Container OSS mount configuration.
   */
  webOSSConfig?: WebOSSConfig;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      environmentVariables: 'EnvironmentVariables',
      image: 'Image',
      imageRegistryConfig: 'ImageRegistryConfig',
      metricsCollectConfig: 'MetricsCollectConfig',
      port: 'Port',
      requestConcurrency: 'RequestConcurrency',
      requestTimeout: 'RequestTimeout',
      resources: 'Resources',
      SLSCollectConfigs: 'SLSCollectConfigs',
      startupProbe: 'StartupProbe',
      webNASConfig: 'WebNASConfig',
      webOSSConfig: 'WebOSSConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      command: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      image: 'string',
      imageRegistryConfig: ImageRegistryConfig,
      metricsCollectConfig: MetricsCollectConfig,
      port: 'number',
      requestConcurrency: 'number',
      requestTimeout: 'number',
      resources: ContainerResources,
      SLSCollectConfigs: SLSCollectConfigs,
      startupProbe: StartupProbe,
      webNASConfig: WebNASConfig,
      webOSSConfig: WebOSSConfig,
    };
  }

  validate() {
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.imageRegistryConfig && typeof (this.imageRegistryConfig as any).validate === 'function') {
      (this.imageRegistryConfig as any).validate();
    }
    if(this.metricsCollectConfig && typeof (this.metricsCollectConfig as any).validate === 'function') {
      (this.metricsCollectConfig as any).validate();
    }
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    if(this.SLSCollectConfigs && typeof (this.SLSCollectConfigs as any).validate === 'function') {
      (this.SLSCollectConfigs as any).validate();
    }
    if(this.startupProbe && typeof (this.startupProbe as any).validate === 'function') {
      (this.startupProbe as any).validate();
    }
    if(this.webNASConfig && typeof (this.webNASConfig as any).validate === 'function') {
      (this.webNASConfig as any).validate();
    }
    if(this.webOSSConfig && typeof (this.webOSSConfig as any).validate === 'function') {
      (this.webOSSConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

