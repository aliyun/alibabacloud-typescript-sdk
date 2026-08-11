// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilesConfigVariablesValue } from "./FilesConfigVariablesValue";


export class PublishAdvanceConfigRequestFilesConfig extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * {\\"url\\":\\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\\"}
   */
  content?: string;
  /**
   * @remarks
   * The variable list.
   */
  variables?: { [key: string]: FilesConfigVariablesValue };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': FilesConfigVariablesValue },
    };
  }

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The advanced configuration information.
   */
  config?: PublishAdvanceConfigRequestFilesConfig;
  /**
   * @remarks
   * The folder name.
   * 
   * @example
   * /clusters
   */
  dirName?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * vector_question_schema.json
   */
  fileName?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - UPDATE: updates the file.
   * - DELETE: deletes the file.
   * 
   * Default value: UPDATE.
   * 
   * @example
   * UPDATE
   */
  operateType?: string;
  /**
   * @remarks
   * The OSS file path.
   * 
   * @example
   * oss://opensearch/test.json
   */
  ossPath?: string;
  /**
   * @remarks
   * The parent file path.
   * 
   * @example
   * /
   */
  parentFullPath?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      dirName: 'dirName',
      fileName: 'fileName',
      operateType: 'operateType',
      ossPath: 'ossPath',
      parentFullPath: 'parentFullPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: PublishAdvanceConfigRequestFilesConfig,
      dirName: 'string',
      fileName: 'string',
      operateType: 'string',
      ossPath: 'string',
      parentFullPath: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAdvanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the advanced configuration.
   * 
   * @example
   * Custom configuration
   */
  desc?: string;
  /**
   * @remarks
   * The file information.
   */
  files?: PublishAdvanceConfigRequestFiles[];
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      files: 'files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      files: { 'type': 'array', 'itemType': PublishAdvanceConfigRequestFiles },
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

