// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportInterveneFileAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * import.xls
   */
  docName?: string;
  /**
   * @example
   * import.xls
   */
  fileKey?: string;
  /**
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

