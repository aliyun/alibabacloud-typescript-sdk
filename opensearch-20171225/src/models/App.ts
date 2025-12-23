// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSource } from "./DataSource";
import { Domain } from "./Domain";
import { FirstRank } from "./FirstRank";
import { QueryProcessor } from "./QueryProcessor";
import { Quota } from "./Quota";
import { Schema } from "./Schema";
import { SecondRank } from "./SecondRank";
import { Summary } from "./Summary";


/**
 */
export class AppCluster extends $dara.Model {
  maxQueryClauseLength?: number;
  maxTimeoutMS?: number;
  static names(): { [key: string]: string } {
    return {
      maxQueryClauseLength: 'maxQueryClauseLength',
      maxTimeoutMS: 'maxTimeoutMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxQueryClauseLength: 'number',
      maxTimeoutMS: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class App extends $dara.Model {
  autoSwitch?: boolean;
  cluster?: AppCluster;
  dataSources?: DataSource[];
  description?: string;
  domain?: Domain;
  fetchFields?: string[];
  firstRanks?: FirstRank[];
  networkType?: string;
  queryProcessors?: QueryProcessor[];
  quota?: Quota;
  realtimeShared?: boolean;
  schema?: Schema;
  schemas?: Schema[];
  secondRanks?: SecondRank[];
  summaries?: Summary[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoSwitch: 'autoSwitch',
      cluster: 'cluster',
      dataSources: 'dataSources',
      description: 'description',
      domain: 'domain',
      fetchFields: 'fetchFields',
      firstRanks: 'firstRanks',
      networkType: 'networkType',
      queryProcessors: 'queryProcessors',
      quota: 'quota',
      realtimeShared: 'realtimeShared',
      schema: 'schema',
      schemas: 'schemas',
      secondRanks: 'secondRanks',
      summaries: 'summaries',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitch: 'boolean',
      cluster: AppCluster,
      dataSources: { 'type': 'array', 'itemType': DataSource },
      description: 'string',
      domain: Domain,
      fetchFields: { 'type': 'array', 'itemType': 'string' },
      firstRanks: { 'type': 'array', 'itemType': FirstRank },
      networkType: 'string',
      queryProcessors: { 'type': 'array', 'itemType': QueryProcessor },
      quota: Quota,
      realtimeShared: 'boolean',
      schema: Schema,
      schemas: { 'type': 'array', 'itemType': Schema },
      secondRanks: { 'type': 'array', 'itemType': SecondRank },
      summaries: { 'type': 'array', 'itemType': Summary },
      type: 'string',
    };
  }

  validate() {
    if(this.cluster && typeof (this.cluster as any).validate === 'function') {
      (this.cluster as any).validate();
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.domain && typeof (this.domain as any).validate === 'function') {
      (this.domain as any).validate();
    }
    if(Array.isArray(this.fetchFields)) {
      $dara.Model.validateArray(this.fetchFields);
    }
    if(Array.isArray(this.firstRanks)) {
      $dara.Model.validateArray(this.firstRanks);
    }
    if(Array.isArray(this.queryProcessors)) {
      $dara.Model.validateArray(this.queryProcessors);
    }
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    if(Array.isArray(this.schemas)) {
      $dara.Model.validateArray(this.schemas);
    }
    if(Array.isArray(this.secondRanks)) {
      $dara.Model.validateArray(this.secondRanks);
    }
    if(Array.isArray(this.summaries)) {
      $dara.Model.validateArray(this.summaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

