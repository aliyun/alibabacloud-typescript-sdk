// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileUploadInfoRequestOptionPreCheckParam extends $dara.Model {
  /**
   * @example
   * None
   */
  name?: string;
  /**
   * @example
   * None
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

