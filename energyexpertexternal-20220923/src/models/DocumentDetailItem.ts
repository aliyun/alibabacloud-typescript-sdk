// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentDetailItem extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   */
  createTime?: string;
  docHash?: string;
  docName?: string;
  docUrl?: string;
  folderId?: string;
  folderName?: string;
  id?: number;
  jobId?: string;
  jobStatus?: string;
  originDocName?: string;
  originDocUrl?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      docHash: 'docHash',
      docName: 'docName',
      docUrl: 'docUrl',
      folderId: 'folderId',
      folderName: 'folderName',
      id: 'id',
      jobId: 'jobId',
      jobStatus: 'jobStatus',
      originDocName: 'originDocName',
      originDocUrl: 'originDocUrl',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      docHash: 'string',
      docName: 'string',
      docUrl: 'string',
      folderId: 'string',
      folderName: 'string',
      id: 'number',
      jobId: 'string',
      jobStatus: 'string',
      originDocName: 'string',
      originDocUrl: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

