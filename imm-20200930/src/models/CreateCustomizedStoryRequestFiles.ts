// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomizedStoryRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The URIs of the files.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"URI":"oss://bucket1/file1"}]
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

