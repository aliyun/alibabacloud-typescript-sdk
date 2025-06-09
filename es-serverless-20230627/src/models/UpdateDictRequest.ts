// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDictRequestFiles } from "./UpdateDictRequestFiles";


export class UpdateDictRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowCover?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  files?: UpdateDictRequestFiles[];
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @example
   * MAIN
   */
  type?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowCover: 'allowCover',
      files: 'files',
      sourceType: 'sourceType',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCover: 'boolean',
      files: { 'type': 'array', 'itemType': UpdateDictRequestFiles },
      sourceType: 'string',
      type: 'string',
      dryRun: 'boolean',
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

