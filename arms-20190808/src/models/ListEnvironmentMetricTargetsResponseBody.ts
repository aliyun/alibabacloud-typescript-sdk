// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentMetricTargetsResponseBodyDataActiveTargets extends $dara.Model {
  /**
   * @remarks
   * The tags used for service discovery.
   */
  discoveredLabels?: { [key: string]: string };
  /**
   * @remarks
   * The URL of the target.
   * 
   * @example
   * http://xxx
   */
  globalUrl?: string;
  /**
   * @remarks
   * The health status.
   * 
   * @example
   * up
   */
  health?: string;
  /**
   * @remarks
   * The tags.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The last error message.
   * 
   * @example
   * Get \\"http://172.16.0.86:9104/metrics\\": dial tcp 172.16.0.86:9104: connect: connection refused
   */
  lastError?: string;
  /**
   * @remarks
   * The last collection time.
   * 
   * @example
   * 2023-10-12T07:15:47.306691514Z
   */
  lastScrape?: string;
  /**
   * @remarks
   * The duration of the last collection.
   * 
   * @example
   * 0.00127593
   */
  lastScrapeDuration?: number;
  /**
   * @remarks
   * The amount of metrics in the last collection.
   * 
   * @example
   * 122
   */
  lastScrapeSeries?: number;
  /**
   * @remarks
   * The name of the collection.
   * 
   * @example
   * arms-prom/mysql-exporter-mysql-1694429267986-sm/0"
   */
  scrapePool?: string;
  /**
   * @remarks
   * The URL of the collection.
   * 
   * @example
   * http://xxxx
   */
  scrapeUrl?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredLabels: 'DiscoveredLabels',
      globalUrl: 'GlobalUrl',
      health: 'Health',
      labels: 'Labels',
      lastError: 'LastError',
      lastScrape: 'LastScrape',
      lastScrapeDuration: 'LastScrapeDuration',
      lastScrapeSeries: 'LastScrapeSeries',
      scrapePool: 'ScrapePool',
      scrapeUrl: 'ScrapeUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      globalUrl: 'string',
      health: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lastError: 'string',
      lastScrape: 'string',
      lastScrapeDuration: 'number',
      lastScrapeSeries: 'number',
      scrapePool: 'string',
      scrapeUrl: 'string',
    };
  }

  validate() {
    if(this.discoveredLabels) {
      $dara.Model.validateMap(this.discoveredLabels);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentMetricTargetsResponseBodyDataDroppedTargets extends $dara.Model {
  /**
   * @remarks
   * The tags used for service discovery.
   */
  discoveredLabels?: { [key: string]: string };
  /**
   * @remarks
   * The URL of the target.
   * 
   * @example
   * http://xxx
   */
  globalUrl?: string;
  /**
   * @remarks
   * The health status.
   * 
   * @example
   * up
   */
  health?: string;
  /**
   * @remarks
   * The tags.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The last error message.
   * 
   * @example
   * Get \\"http://172.16.0.86:9104/metrics\\": dial tcp 172.16.0.86:9104: connect: connection refused
   */
  lastError?: string;
  /**
   * @remarks
   * The last collection time.
   * 
   * @example
   * 2023-10-12T07:15:47.306691514Z
   */
  lastScrape?: string;
  /**
   * @remarks
   * The duration of the last collection.
   * 
   * @example
   * 0.00127593
   */
  lastScrapeDuration?: number;
  /**
   * @remarks
   * The amount of metrics in the last collection.
   * 
   * @example
   * 122
   */
  lastScrapeSeries?: number;
  /**
   * @remarks
   * The name of the collection.
   * 
   * @example
   * arms-prom/mysql-exporter-mysql-1694429267986-sm/0"
   */
  scrapePool?: string;
  /**
   * @remarks
   * The URL of the collection.
   * 
   * @example
   * http://xxxx
   */
  scrapeUrl?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredLabels: 'DiscoveredLabels',
      globalUrl: 'GlobalUrl',
      health: 'Health',
      labels: 'Labels',
      lastError: 'LastError',
      lastScrape: 'LastScrape',
      lastScrapeDuration: 'LastScrapeDuration',
      lastScrapeSeries: 'LastScrapeSeries',
      scrapePool: 'ScrapePool',
      scrapeUrl: 'ScrapeUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      globalUrl: 'string',
      health: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lastError: 'string',
      lastScrape: 'string',
      lastScrapeDuration: 'number',
      lastScrapeSeries: 'number',
      scrapePool: 'string',
      scrapeUrl: 'string',
    };
  }

  validate() {
    if(this.discoveredLabels) {
      $dara.Model.validateMap(this.discoveredLabels);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentMetricTargetsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The active targets.
   */
  activeTargets?: ListEnvironmentMetricTargetsResponseBodyDataActiveTargets[];
  /**
   * @remarks
   * The deleted targets.
   */
  droppedTargets?: ListEnvironmentMetricTargetsResponseBodyDataDroppedTargets[];
  static names(): { [key: string]: string } {
    return {
      activeTargets: 'ActiveTargets',
      droppedTargets: 'DroppedTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTargets: { 'type': 'array', 'itemType': ListEnvironmentMetricTargetsResponseBodyDataActiveTargets },
      droppedTargets: { 'type': 'array', 'itemType': ListEnvironmentMetricTargetsResponseBodyDataDroppedTargets },
    };
  }

  validate() {
    if(Array.isArray(this.activeTargets)) {
      $dara.Model.validateArray(this.activeTargets);
    }
    if(Array.isArray(this.droppedTargets)) {
      $dara.Model.validateArray(this.droppedTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentMetricTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The struct returned.
   */
  data?: ListEnvironmentMetricTargetsResponseBodyData;
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
   * 16AF921B-8187-489F-9913-43C808B4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListEnvironmentMetricTargetsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

