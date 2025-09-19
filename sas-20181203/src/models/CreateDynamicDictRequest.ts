// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDynamicDictRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to overwrite existing data. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  override?: boolean;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 123.103.9.***
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      override: 'Override',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      override: 'boolean',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

