// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLocationServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  jwtToken?: string;
  note?: string;
  qps?: number;
  svcName?: string;
  svcState?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jwtToken: 'JwtToken',
      note: 'Note',
      qps: 'Qps',
      svcName: 'SvcName',
      svcState: 'SvcState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      jwtToken: 'string',
      note: 'string',
      qps: 'number',
      svcName: 'string',
      svcState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

