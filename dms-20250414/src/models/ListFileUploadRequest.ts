// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileUploadRequest extends $dara.Model {
  callFrom?: string;
  /**
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @example
   * TextReport
   */
  fileCategory?: string;
  /**
   * @example
   * Agent
   */
  fileFrom?: string;
  /**
   * @example
   * f-8*******01m
   */
  fileId?: string;
  /**
   * @example
   * h8r********4fch
   */
  sessionId?: string;
  /**
   * @example
   * gmtCreated
   */
  sortColumn?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
      fileCategory: 'FileCategory',
      fileFrom: 'FileFrom',
      fileId: 'FileId',
      sessionId: 'SessionId',
      sortColumn: 'SortColumn',
      sortDirection: 'SortDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      dmsUnit: 'string',
      fileCategory: 'string',
      fileFrom: 'string',
      fileId: 'string',
      sessionId: 'string',
      sortColumn: 'string',
      sortDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

