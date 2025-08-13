// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelFileUploadRequest extends $dara.Model {
  /**
   * @remarks
   * File name.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-07-10/商品信息批量导出-20230710132028
   */
  objectName?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      objectName: 'ObjectName',
      regId: 'RegId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectName: 'string',
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

