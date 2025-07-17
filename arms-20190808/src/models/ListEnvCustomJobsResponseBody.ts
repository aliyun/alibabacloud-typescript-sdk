// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvCustomJobsResponseBodyDataScrapeConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * custom-sd-demo
   */
  jobName?: string;
  /**
   * @remarks
   * The path of the metric.
   * 
   * @example
   * /metrics
   */
  metricsPath?: string;
  /**
   * @remarks
   * The service discovery methods.
   */
  scrapeDiscoverys?: string[];
  /**
   * @remarks
   * The capture interval.
   * 
   * @example
   * 30s
   */
  scrapeInterval?: string;
  static names(): { [key: string]: string } {
    return {
      jobName: 'JobName',
      metricsPath: 'MetricsPath',
      scrapeDiscoverys: 'ScrapeDiscoverys',
      scrapeInterval: 'ScrapeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
      metricsPath: 'string',
      scrapeDiscoverys: { 'type': 'array', 'itemType': 'string' },
      scrapeInterval: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scrapeDiscoverys)) {
      $dara.Model.validateArray(this.scrapeDiscoverys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvCustomJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on to which the custom job belongs.
   * 
   * @example
   * mysql
   */
  addonName?: string;
  /**
   * @remarks
   * The instance name of the add-on.
   * 
   * @example
   * mysql1
   */
  addonReleaseName?: string;
  /**
   * @remarks
   * The version of the add-on.
   * 
   * @example
   * 1.1.0
   */
  addonVersion?: string;
  /**
   * @remarks
   * If the request parameter EncryptYaml is set to true, a Base64-encoded YAML string is returned. Otherwise, a plaintext YAML string is returned.
   * 
   * @example
   * Refer to supplementary instructions.
   */
  configYaml?: string;
  /**
   * @remarks
   * The time when the custom job was created. The value of this parameter is a timestamp.
   * 
   * @example
   * 2022-01-01T10:11:34Z
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * The name of the custom job.
   * 
   * @example
   * job1
   */
  customJobName?: string;
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * @example
   * env-xxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The capture configurations.
   */
  scrapeConfigs?: ListEnvCustomJobsResponseBodyDataScrapeConfigs[];
  /**
   * @remarks
   * The status of the custom job.
   * 
   * @example
   * run
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      addonReleaseName: 'AddonReleaseName',
      addonVersion: 'AddonVersion',
      configYaml: 'ConfigYaml',
      creationTimestamp: 'CreationTimestamp',
      customJobName: 'CustomJobName',
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
      scrapeConfigs: 'ScrapeConfigs',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonReleaseName: 'string',
      addonVersion: 'string',
      configYaml: 'string',
      creationTimestamp: 'string',
      customJobName: 'string',
      environmentId: 'string',
      regionId: 'string',
      scrapeConfigs: { 'type': 'array', 'itemType': ListEnvCustomJobsResponseBodyDataScrapeConfigs },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scrapeConfigs)) {
      $dara.Model.validateArray(this.scrapeConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvCustomJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: ListEnvCustomJobsResponseBodyData[];
  /**
   * @remarks
   * The returned message.
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
   * 2A0CEDF1-06FE-44AC-8E21-21A5BE65****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListEnvCustomJobsResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

