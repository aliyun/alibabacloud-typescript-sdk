// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetVersion } from "./DatasetVersion";


export class GetDatasetVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dataset version.
   */
  datasetVersion?: DatasetVersion;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA8XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: DatasetVersion,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.datasetVersion && typeof (this.datasetVersion as any).validate === 'function') {
      (this.datasetVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

