// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLocationTreeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  jwtToken?: string;
  treeConfig?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jwtToken: 'JwtToken',
      treeConfig: 'TreeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      jwtToken: 'string',
      treeConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

