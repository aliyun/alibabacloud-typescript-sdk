// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMenuPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and responses, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Permission type
   * 
   * @example
   * MENU
   */
  permissionType?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      permissionType: 'permissionType',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      permissionType: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

