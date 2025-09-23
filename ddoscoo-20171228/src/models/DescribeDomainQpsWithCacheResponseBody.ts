// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainQpsWithCacheResponseBody extends $dara.Model {
  blocks?: string[];
  cacheHits?: string[];
  ccBlockQps?: string[];
  ccJsQps?: string[];
  /**
   * @example
   * 60
   */
  interval?: number;
  ipBlockQps?: string[];
  preciseBlocks?: string[];
  preciseJsQps?: string[];
  regionBlocks?: string[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 1577794500
   */
  startTime?: number;
  totals?: string[];
  static names(): { [key: string]: string } {
    return {
      blocks: 'Blocks',
      cacheHits: 'CacheHits',
      ccBlockQps: 'CcBlockQps',
      ccJsQps: 'CcJsQps',
      interval: 'Interval',
      ipBlockQps: 'IpBlockQps',
      preciseBlocks: 'PreciseBlocks',
      preciseJsQps: 'PreciseJsQps',
      regionBlocks: 'RegionBlocks',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totals: 'Totals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blocks: { 'type': 'array', 'itemType': 'string' },
      cacheHits: { 'type': 'array', 'itemType': 'string' },
      ccBlockQps: { 'type': 'array', 'itemType': 'string' },
      ccJsQps: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
      ipBlockQps: { 'type': 'array', 'itemType': 'string' },
      preciseBlocks: { 'type': 'array', 'itemType': 'string' },
      preciseJsQps: { 'type': 'array', 'itemType': 'string' },
      regionBlocks: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      startTime: 'number',
      totals: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.blocks)) {
      $dara.Model.validateArray(this.blocks);
    }
    if(Array.isArray(this.cacheHits)) {
      $dara.Model.validateArray(this.cacheHits);
    }
    if(Array.isArray(this.ccBlockQps)) {
      $dara.Model.validateArray(this.ccBlockQps);
    }
    if(Array.isArray(this.ccJsQps)) {
      $dara.Model.validateArray(this.ccJsQps);
    }
    if(Array.isArray(this.ipBlockQps)) {
      $dara.Model.validateArray(this.ipBlockQps);
    }
    if(Array.isArray(this.preciseBlocks)) {
      $dara.Model.validateArray(this.preciseBlocks);
    }
    if(Array.isArray(this.preciseJsQps)) {
      $dara.Model.validateArray(this.preciseJsQps);
    }
    if(Array.isArray(this.regionBlocks)) {
      $dara.Model.validateArray(this.regionBlocks);
    }
    if(Array.isArray(this.totals)) {
      $dara.Model.validateArray(this.totals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

