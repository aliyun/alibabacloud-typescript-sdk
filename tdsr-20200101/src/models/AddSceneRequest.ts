// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSceneRequest extends $dara.Model {
  /**
   * @example
   * 2345****
   */
  customerUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试名称
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MODEL_3D
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      customerUid: 'CustomerUid',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerUid: 'string',
      name: 'string',
      projectId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

