// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAdvanceConfigRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * /cluster.json
   */
  fullPathName?: string;
  /**
   * @remarks
   * Specifies whether the file is a directory.
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * Specifies whether the file is a template.
   * 
   * @example
   * true
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * general
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAdvanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the advanced configuration that is returned.
   * 
   * @example
   * ""
   */
  content?: string;
  /**
   * @remarks
   * The type of the configuration content. Valid values: FILE, GIT, HTTP, and ODPS.
   * 
   * @example
   * FILE
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the advanced configuration.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The files.
   */
  files?: ModifyAdvanceConfigRequestFiles[];
  /**
   * @remarks
   * The name of the advanced configuration.
   * 
   * @example
   * ha-cn-zvp2qr1sk01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The status of the advanced configuration. Valid values: drafting: The advanced configuration is in the draft state. used: The advanced configuration is being used. unused: The advanced configuration is not used. trash: The advanced configuration is being deleted.
   * 
   * @example
   * used
   */
  status?: string;
  /**
   * @remarks
   * The time when the advanced configuration was updated.
   * 
   * @example
   * 2024-02-27T07:50:55Z
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      desc: 'desc',
      files: 'files',
      name: 'name',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      desc: 'string',
      files: { 'type': 'array', 'itemType': ModifyAdvanceConfigRequestFiles },
      name: 'string',
      status: 'string',
      updateTime: 'number',
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

