// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexJobStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The knowledge base ID, which is the Data.Id returned by the CreateIndex operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The knowledge base job task ID, which is the Data.Id returned by the SubmitIndexJob or SubmitIndexAddDocumentsJob operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 20230718xxxx-146c93bf
   */
  jobId?: string;
  /**
   * @remarks
   * Both the **SubmitIndexJob** and **SubmitIndexAddDocumentsJob** operations support batch file import. The fields returned by this operation include the overall status of the knowledge base job task (`Status`) and the import status of each file (`Document.Status`). If a large number of files are imported, you can use the `PageNumber` parameter for paging. The starting value is 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of file import tasks to return on each page during paging. Maximum value: unlimited. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      indexId: 'IndexId',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexId: 'string',
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

