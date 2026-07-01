// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRcsSignMenuByVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  rcsMenuVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      rcsMenuVersion: 'RcsMenuVersion',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rcsMenuVersion: 'string',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

