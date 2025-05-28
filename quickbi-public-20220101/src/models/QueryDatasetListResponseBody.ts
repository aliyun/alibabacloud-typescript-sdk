// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDatasetListResponseBodyResult } from "./QueryDatasetListResponseBodyResult";


export class QueryDatasetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The keyword used to search for the dataset name.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Test dataset
   */
  result?: QueryDatasetListResponseBodyResult;
  /**
   * @remarks
   * Whether to recursively wrap the dataset in the subdirectory. Valid values:
   * 
   * *   true: returns datasets in all recursive subdirectories in the directoryId directory.
   * *   false: Only datasets in the directory specified by directoryId are returned, excluding subdirectories.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

