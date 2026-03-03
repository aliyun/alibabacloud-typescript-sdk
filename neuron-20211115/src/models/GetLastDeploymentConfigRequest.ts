// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLastDeploymentConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

