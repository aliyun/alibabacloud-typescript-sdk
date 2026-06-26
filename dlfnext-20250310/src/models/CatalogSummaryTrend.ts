// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DateSummary } from "./DateSummary";


export class CatalogSummaryTrend extends $dara.Model {
  /**
   * @remarks
   * The trend of total metadata requests.
   */
  apiVisitCount?: DateSummary[];
  /**
   * @remarks
   * The trend of file access count.
   */
  fileAccessCount?: DateSummary[];
  /**
   * @remarks
   * The data access traffic trend.
   */
  throughput?: DateSummary[];
  /**
   * @remarks
   * The trend of total file count.
   */
  totalFileCount?: DateSummary[];
  /**
   * @remarks
   * The trend of total storage capacity.
   */
  totalFileSizeInBytes?: DateSummary[];
  /**
   * @remarks
   * The trend of total metadata object count.
   */
  totalMetaCount?: DateSummary[];
  static names(): { [key: string]: string } {
    return {
      apiVisitCount: 'apiVisitCount',
      fileAccessCount: 'fileAccessCount',
      throughput: 'throughput',
      totalFileCount: 'totalFileCount',
      totalFileSizeInBytes: 'totalFileSizeInBytes',
      totalMetaCount: 'totalMetaCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVisitCount: { 'type': 'array', 'itemType': DateSummary },
      fileAccessCount: { 'type': 'array', 'itemType': DateSummary },
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
    if(Array.isArray(this.fileAccessCount)) {
      $dara.Model.validateArray(this.fileAccessCount);
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

