// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateFileUrlByKeyRequest extends $dara.Model {
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
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      fileKey: 'FileKey',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      fileKey: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

