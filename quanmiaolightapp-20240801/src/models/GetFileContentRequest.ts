// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileContentRequest extends $dara.Model {
  /**
   * @example
   * oss://default/aimiaobi-service-prod/aimiaobi/temp/1154600634854327_10045847/300469535473178749_300469535473178749_ee11508152b74137ac5747a6f632256e.docx
   */
  fileKey?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'fileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

