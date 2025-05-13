// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetaContentGet } from "./DatasetFileMetaContentGet";


export class GetDatasetFileMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried metadata records of dataset files.
   */
  datasetFileMeta?: DatasetFileMetaContentGet;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-rbvg5wz****c9ks92
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMeta: 'DatasetFileMeta',
      datasetId: 'DatasetId',
      datasetVersion: 'DatasetVersion',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMeta: DatasetFileMetaContentGet,
      datasetId: 'string',
      datasetVersion: 'string',
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.datasetFileMeta && typeof (this.datasetFileMeta as any).validate === 'function') {
      (this.datasetFileMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

