// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublishAdvanceConfigRequestFiles } from "./PublishAdvanceConfigRequestFiles";


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
   * The files.
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

