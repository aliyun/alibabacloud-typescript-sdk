// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * test.docx
   */
  fileName?: string;
  /**
   * @remarks
   * The parent folder.
   * 
   * - materialDocument: The Material Library for AI Writing Assistant.
   * 
   * - datasetUpload: The dataset for AI Search.
   * 
   * - intervenes: Interventions.
   * 
   * - temp: A temporary upload folder. Files in this folder are released periodically.
   * 
   * This parameter is required.
   * 
   * @example
   * dataset
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

