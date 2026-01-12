// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLocationServiceRequest extends $dara.Model {
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  imageId?: number;
  jwtToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  note?: string;
  qps?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageId: 'ImageId',
      jwtToken: 'JwtToken',
      name: 'Name',
      note: 'Note',
      qps: 'Qps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageId: 'number',
      jwtToken: 'string',
      name: 'string',
      note: 'string',
      qps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

