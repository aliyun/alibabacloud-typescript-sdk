// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMPULayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Only a single ID is supported. You can create and query application IDs in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The layout ID. Only a single ID is supported. To obtain a layout ID, see [CreateMPULayout](https://help.aliyun.com/document_detail/162192.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  layoutId?: number;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      layoutId: 'LayoutId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      layoutId: 'number',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

