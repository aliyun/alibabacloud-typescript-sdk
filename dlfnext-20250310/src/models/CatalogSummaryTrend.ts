// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DateSummary } from "./DateSummary";


export class CatalogSummaryTrend extends $dara.Model {
  /**
   * @remarks
   * API visit count trends
   */
  apiVisitCount?: DateSummary[];
  /**
   * @remarks
   * Table count trends
   */
  throughput?: DateSummary[];
  /**
   * @remarks
   * Historical total file count
   */
  totalFileCount?: DateSummary[];
  /**
   * @remarks
   * Database count trends
   */
  totalFileSizeInBytes?: DateSummary[];
  /**
   * @remarks
   * Latest snapshot file count
   */
  totalMetaCount?: DateSummary[];
  static names(): { [key: string]: string } {
    return {
      apiVisitCount: 'apiVisitCount',
      throughput: 'throughput',
      totalFileCount: 'totalFileCount',
      totalFileSizeInBytes: 'totalFileSizeInBytes',
      totalMetaCount: 'totalMetaCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVisitCount: { 'type': 'array', 'itemType': DateSummary },
      throughput: { 'type': 'array', 'itemType': DateSummary },
      totalFileCount: { 'type': 'array', 'itemType': DateSummary },
      totalFileSizeInBytes: { 'type': 'array', 'itemType': DateSummary },
      totalMetaCount: { 'type': 'array', 'itemType': DateSummary },
    };
  }

  validate() {
    if(Array.isArray(this.apiVisitCount)) {
      $dara.Model.validateArray(this.apiVisitCount);
    }
    if(Array.isArray(this.throughput)) {
      $dara.Model.validateArray(this.throughput);
    }
    if(Array.isArray(this.totalFileCount)) {
      $dara.Model.validateArray(this.totalFileCount);
    }
    if(Array.isArray(this.totalFileSizeInBytes)) {
      $dara.Model.validateArray(this.totalFileSizeInBytes);
    }
    if(Array.isArray(this.totalMetaCount)) {
      $dara.Model.validateArray(this.totalMetaCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

