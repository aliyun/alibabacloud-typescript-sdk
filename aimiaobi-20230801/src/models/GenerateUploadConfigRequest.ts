// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadConfigRequest extends $dara.Model {
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
   * test.docx
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * datasetUpload
   */
  parentDir?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      fileName: 'FileName',
      parentDir: 'ParentDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      fileName: 'string',
      parentDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

