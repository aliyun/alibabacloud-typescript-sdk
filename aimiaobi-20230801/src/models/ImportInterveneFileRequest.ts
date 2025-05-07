// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportInterveneFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * import.xls
   */
  docName?: string;
  /**
   * @example
   * import.xsl
   */
  fileKey?: string;
  /**
   * @example
   * http://xxx/xxx.xls
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

