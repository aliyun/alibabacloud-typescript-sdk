// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MoMValues } from "./MoMvalues";


export class CatalogSummary extends $dara.Model {
  apiVisitCountMonthly?: number;
  databaseCount?: MoMValues;
  /**
   * @remarks
   * Update date of the statistics
   */
  generatedDate?: string;
  partitionCount?: MoMValues;
  tableCount?: MoMValues;
  throughputMonthly?: number;
  totalFileCount?: MoMValues;
  totalFileSizeInBytes?: MoMValues;
  static names(): { [key: string]: string } {
    return {
      apiVisitCountMonthly: 'apiVisitCountMonthly',
      databaseCount: 'databaseCount',
      generatedDate: 'generatedDate',
      partitionCount: 'partitionCount',
      tableCount: 'tableCount',
      throughputMonthly: 'throughputMonthly',
      totalFileCount: 'totalFileCount',
      totalFileSizeInBytes: 'totalFileSizeInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVisitCountMonthly: 'number',
      databaseCount: MoMValues,
      generatedDate: 'string',
      partitionCount: MoMValues,
      tableCount: MoMValues,
      throughputMonthly: 'number',
      totalFileCount: MoMValues,
      totalFileSizeInBytes: MoMValues,
    };
  }

  validate() {
    if(this.databaseCount && typeof (this.databaseCount as any).validate === 'function') {
      (this.databaseCount as any).validate();
    }
    if(this.partitionCount && typeof (this.partitionCount as any).validate === 'function') {
      (this.partitionCount as any).validate();
    }
    if(this.tableCount && typeof (this.tableCount as any).validate === 'function') {
      (this.tableCount as any).validate();
    }
    if(this.totalFileCount && typeof (this.totalFileCount as any).validate === 'function') {
      (this.totalFileCount as any).validate();
    }
    if(this.totalFileSizeInBytes && typeof (this.totalFileSizeInBytes as any).validate === 'function') {
      (this.totalFileSizeInBytes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

