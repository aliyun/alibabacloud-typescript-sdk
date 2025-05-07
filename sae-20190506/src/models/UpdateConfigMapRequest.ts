// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigMapRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  configMapId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"env.shell": "/bin/sh"}
   */
  data?: string;
  /**
   * @example
   * test-desc
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      data: 'Data',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      data: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

