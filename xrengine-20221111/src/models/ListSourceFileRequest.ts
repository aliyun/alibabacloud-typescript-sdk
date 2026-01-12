// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSourceFileRequest extends $dara.Model {
  jwtToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

