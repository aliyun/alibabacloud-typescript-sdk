// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyCustomScrapeJobRulesResponseBodyCustomScrapeJobRulesScrapeConfigs extends $dara.Model {
  /**
   * @example
   * mysql-exporter
   */
  jobName?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * /metrics
   */
  metricsPath?: string;
  /**
   * @example
   * http
   */
  scheme?: string;
  /**
   * @example
   * 30s
   */
  scrapeInterval?: string;
  /**
   * @example
   * 60s
   */
  scrapeTimeout?: string;
  serviceDiscoveryConfigs?: string[];
  static names(): { [key: string]: string } {
    return {
      jobName: 'jobName',
      message: 'message',
      metricsPath: 'metricsPath',
      scheme: 'scheme',
      scrapeInterval: 'scrapeInterval',
      scrapeTimeout: 'scrapeTimeout',
      serviceDiscoveryConfigs: 'serviceDiscoveryConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
      message: 'string',
      metricsPath: 'string',
      scheme: 'string',
      scrapeInterval: 'string',
      scrapeTimeout: 'string',
      serviceDiscoveryConfigs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceDiscoveryConfigs)) {
      $dara.Model.validateArray(this.serviceDiscoveryConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyCustomScrapeJobRulesResponseBodyCustomScrapeJobRules extends $dara.Model {
  /**
   * @example
   * cloud-ecs
   */
  addonName?: string;
  /**
   * @example
   * release-12345678
   */
  addonReleaseName?: string;
  /**
   * @example
   * 0.0.1
   */
  addonVersion?: string;
  /**
   * @example
   * scrape_cofnigs:
   * - jobxxxxxx
   */
  configYaml?: string;
  /**
   * @example
   * mini
   */
  enableStatus?: string;
  /**
   * @example
   * true
   */
  encryptYaml?: boolean;
  /**
   * @example
   * 1
   */
  matchedPodCount?: number;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * dlab1
   */
  name?: string;
  /**
   * @example
   * prod-data
   */
  namespace?: string;
  scrapeConfigs?: ListIntegrationPolicyCustomScrapeJobRulesResponseBodyCustomScrapeJobRulesScrapeConfigs[];
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      addonReleaseName: 'addonReleaseName',
      addonVersion: 'addonVersion',
      configYaml: 'configYaml',
      enableStatus: 'enableStatus',
      encryptYaml: 'encryptYaml',
      matchedPodCount: 'matchedPodCount',
      message: 'message',
      name: 'name',
      namespace: 'namespace',
      scrapeConfigs: 'scrapeConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonReleaseName: 'string',
      addonVersion: 'string',
      configYaml: 'string',
      enableStatus: 'string',
      encryptYaml: 'boolean',
      matchedPodCount: 'number',
      message: 'string',
      name: 'string',
      namespace: 'string',
      scrapeConfigs: { 'type': 'array', 'itemType': ListIntegrationPolicyCustomScrapeJobRulesResponseBodyCustomScrapeJobRulesScrapeConfigs },
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

export class ListIntegrationPolicyCustomScrapeJobRulesResponseBody extends $dara.Model {
  /**
   * @example
   * et15prod-et15storage
   */
  clusterId?: string;
  customScrapeJobRules?: ListIntegrationPolicyCustomScrapeJobRulesResponseBodyCustomScrapeJobRules[];
  /**
   * @example
   * policy-15abcc24c06f4797832b5954198e1ed1
   */
  policyId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      customScrapeJobRules: 'customScrapeJobRules',
      policyId: 'policyId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      customScrapeJobRules: { 'type': 'array', 'itemType': ListIntegrationPolicyCustomScrapeJobRulesResponseBodyCustomScrapeJobRules },
      policyId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customScrapeJobRules)) {
      $dara.Model.validateArray(this.customScrapeJobRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

