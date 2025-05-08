// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIndexJobStatusResponseBodyDataDocuments } from "./GetIndexJobStatusResponseBodyDataDocuments";


export class GetIndexJobStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of imported documents.
   */
  documents?: GetIndexJobStatusResponseBodyDataDocuments[];
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 66122af12a4e45ddae6bd6c845556647
   */
  jobId?: string;
  /**
   * @remarks
   * The status of the knowledge base job. Valid values:
   * 
   * *   COMPLETED
   * *   FAILED
   * *   RUNNING
   * *   PENDING
   * 
   * @example
   * PENDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      jobId: 'JobId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': GetIndexJobStatusResponseBodyDataDocuments },
      jobId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

