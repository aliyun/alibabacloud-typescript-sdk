// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadWritePolicy extends $dara.Model {
  /**
   * @example
   * true
   */
  autoGeneratePk?: boolean;
  /**
   * @example
   * true
   */
  writeHa?: boolean;
  /**
   * @example
   * sync
   */
  writePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      autoGeneratePk: 'autoGeneratePk',
      writeHa: 'writeHa',
      writePolicy: 'writePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoGeneratePk: 'boolean',
      writeHa: 'boolean',
      writePolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

