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
   * The startup parameters of the container.
   * 
   * @example
   * ["abc", ">", "file0"]
   */
  args?: string;
  /**
   * @remarks
   * The startup command of the container.
   * 
   * @example
   * ["/bin/sh"]
   */
  command?: string;
  /**
   * @remarks
   * The container environment variables.
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * The container image.
   * 
   * This parameter is required.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/serverless_devsxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The configuration of the image repository.
   */
  imageRegistryConfig?: ImageRegistryConfig;
  /**
   * @remarks
   * The configuration for collecting monitoring records.
   */
  metricsCollectConfig?: MetricsCollectConfig;
  /**
   * @remarks
   * The port of the container.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The number of concurrent requests on a single instance.
   * 
   * @example
   * 100
   */
  requestConcurrency?: number;
  /**
   * @remarks
   * The timeout period of the container request.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The configurations of the container resources.
   * 
   * This parameter is required.
   */
  resources?: ContainerResources;
  /**
   * @remarks
   * The configuration of container log collection.
   */
  SLSCollectConfigs?: SLSCollectConfigs;
  /**
   * @remarks
   * The container startup check configuration.
   */
  startupProbe?: StartupProbe;
  /**
   * @remarks
   * The container NAS configuration.
   */
  webNASConfig?: WebNASConfig;
  /**
   * @remarks
   * The container OSS mount configuration.
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

