// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadWritePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically generate a document hash primary key when no primary key exists. Valid values:
   * 
   * - true (default): automatically generates a primary key.
   * - false: does not automatically generate a primary key.
   * 
   * >Notice:  autoGeneratePk cannot be modified independently. The autoGeneratePk setting takes effect only when writeHa is changed from false to true.
   * .
   * 
   * @example
   * true
   */
  autoGeneratePk?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the write high-availability feature. Valid values:
   * 
   * - true: enabled.
   * - false: not enabled.
   * 
   * @example
   * true
   */
  writeHa?: boolean;
  /**
   * @remarks
   * Temporarily switches between synchronous and asynchronous high availability. Valid values:
   * 
   * - sync: temporarily switches from asynchronous write high availability to synchronous write.
   * - async: restores asynchronous write high availability after synchronous write is temporarily enabled.
   * 
   * > This field takes effect only when high availability is enabled, that is, writeHa is set to true. You do not need to pass in the writeHa field when setting this field.
   * 
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

