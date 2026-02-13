// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentDetailItem extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-09-08T17:04:28.000+08:00
   */
  createTime?: string;
  /**
   * @example
   * 5335c8828ccf735a500ed636590c713a94daf6cdacc90237733035cc5a152afb_1760513801010
   */
  docHash?: string;
  docName?: string;
  /**
   * @example
   * https://carbon-aidoc.oss-cn-hangzhou.aliyuncs.com/jobs/jobid/document/documentid/docName
   */
  docUrl?: string;
  /**
   * @example
   * adafb91d4e014e2eb4d0a5375b547115
   */
  folderId?: string;
  folderName?: string;
  /**
   * @example
   * 6731
   */
  id?: number;
  /**
   * @example
   * 74ec62f4f4e74e5882d4086a40f2b9c6
   */
  jobId?: string;
  /**
   * @example
   * PARSING_COMPLETED
   */
  jobStatus?: string;
  originDocName?: string;
  /**
   * @example
   * https://carbon-aidoc.oss-cn-hangzhou.aliyuncs.com/jobs/jobid/document/documentid/originDocName
   */
  originDocUrl?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-09-08T17:04:28.000+08:00
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

