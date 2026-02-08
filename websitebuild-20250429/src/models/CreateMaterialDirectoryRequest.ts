// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMaterialDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WS20260206134746000001
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  parentDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      name: 'Name',
      parentDirectoryId: 'ParentDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      name: 'string',
      parentDirectoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

