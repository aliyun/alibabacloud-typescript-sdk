// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogsResponseBodyMetaPhraseQueryInfo extends $dara.Model {
  beginOffset?: number;
  endOffset?: number;
  endTime?: number;
  scanAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginOffset: 'beginOffset',
      endOffset: 'endOffset',
      endTime: 'endTime',
      scanAll: 'scanAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginOffset: 'number',
      endOffset: 'number',
      endTime: 'number',
      scanAll: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsResponseBodyMeta extends $dara.Model {
  aggQuery?: string;
  columnTypes?: string[];
  count?: number;
  cpuCores?: number;
  cpuSec?: number;
  elapsedMillisecond?: number;
  hasSQL?: boolean;
  highlights?: { [key: string]: any }[];
  isAccurate?: boolean;
  keys?: string[];
  limited?: number;
  mode?: number;
  phraseQueryInfo?: GetLogsResponseBodyMetaPhraseQueryInfo;
  processedBytes?: number;
  processedRows?: number;
  progress?: string;
  scanBytes?: number;
  telementryType?: string;
  terms?: { [key: string]: any }[];
  whereQuery?: string;
  static names(): { [key: string]: string } {
    return {
      aggQuery: 'aggQuery',
      columnTypes: 'columnTypes',
      count: 'count',
      cpuCores: 'cpuCores',
      cpuSec: 'cpuSec',
      elapsedMillisecond: 'elapsedMillisecond',
      hasSQL: 'hasSQL',
      highlights: 'highlights',
      isAccurate: 'isAccurate',
      keys: 'keys',
      limited: 'limited',
      mode: 'mode',
      phraseQueryInfo: 'phraseQueryInfo',
      processedBytes: 'processedBytes',
      processedRows: 'processedRows',
      progress: 'progress',
      scanBytes: 'scanBytes',
      telementryType: 'telementryType',
      terms: 'terms',
      whereQuery: 'whereQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggQuery: 'string',
      columnTypes: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
      cpuCores: 'number',
      cpuSec: 'number',
      elapsedMillisecond: 'number',
      hasSQL: 'boolean',
      highlights: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      isAccurate: 'boolean',
      keys: { 'type': 'array', 'itemType': 'string' },
      limited: 'number',
      mode: 'number',
      phraseQueryInfo: GetLogsResponseBodyMetaPhraseQueryInfo,
      processedBytes: 'number',
      processedRows: 'number',
      progress: 'string',
      scanBytes: 'number',
      telementryType: 'string',
      terms: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      whereQuery: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnTypes)) {
      $dara.Model.validateArray(this.columnTypes);
    }
    if(Array.isArray(this.highlights)) {
      $dara.Model.validateArray(this.highlights);
    }
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(this.phraseQueryInfo && typeof (this.phraseQueryInfo as any).validate === 'function') {
      (this.phraseQueryInfo as any).validate();
    }
    if(Array.isArray(this.terms)) {
      $dara.Model.validateArray(this.terms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsResponseBody extends $dara.Model {
  data?: { [key: string]: string }[];
  meta?: GetLogsResponseBodyMeta;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      meta: GetLogsResponseBodyMeta,
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

