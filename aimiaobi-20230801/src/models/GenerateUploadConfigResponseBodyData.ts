// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  formDatas?: { [key: string]: any };
  /**
   * @example
   * https://bucket-name.oss-cn-hangzhou.aliyuncs.com
   */
  postUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      formDatas: 'FormDatas',
      postUrl: 'PostUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      formDatas: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      postUrl: 'string',
    };
  }

  validate() {
    if(this.formDatas) {
      $dara.Model.validateMap(this.formDatas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

