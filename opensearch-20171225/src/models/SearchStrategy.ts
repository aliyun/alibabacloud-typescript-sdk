// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchStrategyMergeConfig extends $dara.Model {
  docCount?: number;
  rankName?: string;
  static names(): { [key: string]: string } {
    return {
      docCount: 'docCount',
      rankName: 'rankName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docCount: 'number',
      rankName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStrategySearchConfigs extends $dara.Model {
  firstRankName?: string;
  mergeProportion?: number;
  /**
   * @example
   * keyword: 关键字查询 vector: 向量查询
   */
  queryType?: string;
  secondRankName?: string;
  static names(): { [key: string]: string } {
    return {
      firstRankName: 'firstRankName',
      mergeProportion: 'mergeProportion',
      queryType: 'queryType',
      secondRankName: 'secondRankName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstRankName: 'string',
      mergeProportion: 'number',
      queryType: 'string',
      secondRankName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStrategy extends $dara.Model {
  description?: string;
  isDefault?: boolean;
  mergeConfig?: SearchStrategyMergeConfig;
  name?: string;
  searchConfigs?: SearchStrategySearchConfigs[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      isDefault: 'isDefault',
      mergeConfig: 'mergeConfig',
      name: 'name',
      searchConfigs: 'searchConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      isDefault: 'boolean',
      mergeConfig: SearchStrategyMergeConfig,
      name: 'string',
      searchConfigs: { 'type': 'array', 'itemType': SearchStrategySearchConfigs },
    };
  }

  validate() {
    if(this.mergeConfig && typeof (this.mergeConfig as any).validate === 'function') {
      (this.mergeConfig as any).validate();
    }
    if(Array.isArray(this.searchConfigs)) {
      $dara.Model.validateArray(this.searchConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

