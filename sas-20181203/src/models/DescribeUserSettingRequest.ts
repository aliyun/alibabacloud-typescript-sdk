// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 112.94.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

