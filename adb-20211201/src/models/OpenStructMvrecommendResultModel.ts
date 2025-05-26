// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OpenStructMvBaseTableDetailModel } from "./OpenStructMvBaseTableDetailModel";


export class OpenStructMVRecommendResultModel extends $dara.Model {
  acceleratedQueriesCount?: number;
  baseTables?: OpenStructMvBaseTableDetailModel[];
  savedScanbytes?: number;
  subquery?: string;
  subqueryId?: number;
  supportIncrementalRefresh?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceleratedQueriesCount: 'AcceleratedQueriesCount',
      baseTables: 'BaseTables',
      savedScanbytes: 'SavedScanbytes',
      subquery: 'Subquery',
      subqueryId: 'SubqueryId',
      supportIncrementalRefresh: 'SupportIncrementalRefresh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratedQueriesCount: 'number',
      baseTables: { 'type': 'array', 'itemType': OpenStructMvBaseTableDetailModel },
      savedScanbytes: 'number',
      subquery: 'string',
      subqueryId: 'number',
      supportIncrementalRefresh: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.baseTables)) {
      $dara.Model.validateArray(this.baseTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

