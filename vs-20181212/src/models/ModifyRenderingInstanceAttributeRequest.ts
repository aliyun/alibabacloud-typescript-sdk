// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRenderingInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * TestInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * The device password.
   * 
   * @example
   * Toehold2020
   */
  password?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      password: 'Password',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      password: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

