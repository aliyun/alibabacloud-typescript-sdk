// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

