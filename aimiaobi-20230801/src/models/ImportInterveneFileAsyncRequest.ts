// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportInterveneFileAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Name of the uploaded file
   * 
   * @example
   * import.xls
   */
  docName?: string;
  /**
   * @remarks
   * OSS key of the file
   * 
   * @example
   * import.xls
   */
  fileKey?: string;
  /**
   * @remarks
   * File URL
   * 
   * @example
   * https://xxx/import.xls
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      docName: 'DocName',
      fileKey: 'FileKey',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      docName: 'string',
      fileKey: 'string',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

