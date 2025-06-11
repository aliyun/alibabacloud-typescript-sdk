// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataStructTransferConfig extends $dara.Model {
  /**
   * @example
   * DO_NOTHING_IF_BYTE_USED
   */
  byteCharConvertStrategy?: string;
  /**
   * @example
   * false
   */
  deferIndexCreation?: boolean;
  static names(): { [key: string]: string } {
    return {
      byteCharConvertStrategy: 'ByteCharConvertStrategy',
      deferIndexCreation: 'DeferIndexCreation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteCharConvertStrategy: 'string',
      deferIndexCreation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

