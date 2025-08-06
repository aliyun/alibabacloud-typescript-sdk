// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntelligentStrategyRequest extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  state?: string;
  strategyIds?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      state: 'State',
      strategyIds: 'StrategyIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      state: 'string',
      strategyIds: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

