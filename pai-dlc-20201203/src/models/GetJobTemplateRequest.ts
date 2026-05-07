// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * 不传返回默认版本；传具体数字返回该版本；传 all 返回全部版本
   * 
   * @example
   * all
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

