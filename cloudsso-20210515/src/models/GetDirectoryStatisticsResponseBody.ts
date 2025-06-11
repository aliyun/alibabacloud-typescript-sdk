// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDirectoryStatisticsResponseBodyDirectoryStatistics } from "./GetDirectoryStatisticsResponseBodyDirectoryStatistics";


export class GetDirectoryStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of the directory.
   */
  directoryStatistics?: GetDirectoryStatisticsResponseBodyDirectoryStatistics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B7228B0-A435-5D27-A6B2-ED3571F0654B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryStatistics: 'DirectoryStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryStatistics: GetDirectoryStatisticsResponseBodyDirectoryStatistics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.directoryStatistics && typeof (this.directoryStatistics as any).validate === 'function') {
      (this.directoryStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

