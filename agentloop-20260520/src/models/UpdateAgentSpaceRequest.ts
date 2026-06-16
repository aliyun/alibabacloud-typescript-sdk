// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentSpaceRequest extends $dara.Model {
  cmsWorkspace?: string;
  description?: string;
  /**
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      cmsWorkspace: 'cmsWorkspace',
      description: 'description',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsWorkspace: 'string',
      description: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

