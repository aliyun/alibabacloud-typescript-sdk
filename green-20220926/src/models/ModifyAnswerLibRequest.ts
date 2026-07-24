// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAnswerLibRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the proxy response library.
   * 
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @remarks
   * The name of the library.
   * 
   * @example
   * 测试库
   */
  libName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      libName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

