// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSExport } from "./Ossexport";


export class ListOSSHDFSExportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of OSS-HDFS export tasks returned in the current response.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The list of OSS-HDFS export tasks.
   */
  results?: OSSExport[];
  /**
   * @remarks
   * The total number of OSS-HDFS export tasks in the project.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': OSSExport },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

