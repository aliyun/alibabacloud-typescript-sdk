// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArtifactMeta extends $dara.Model {
  /**
   * @example
   * CRC-64 code
   */
  checksum?: string;
  /**
   * @example
   * my-artifact
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'checksum',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
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

