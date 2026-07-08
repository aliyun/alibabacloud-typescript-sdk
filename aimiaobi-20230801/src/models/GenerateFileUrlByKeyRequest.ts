// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateFileUrlByKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Unique workspace identity: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * File key. Format: protocol://serverInstance/bucketPath/fileKey
   * 
   * @example
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  /**
   * @remarks
   * File name
   * 
   * @example
   * test.docx
   */
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

