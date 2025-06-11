// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectResponseBodyDataStructTransferConfig extends $dara.Model {
  /**
   * @example
   * DO_NOTHING_IF_BYTE_USED
   */
  byteCharConvertStrategy?: string;
  /**
   * @example
   * true
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

