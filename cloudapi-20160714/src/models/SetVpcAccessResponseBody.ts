// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVpcAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VPC access authorization.
   * 
   * @example
   * 4c68e061860f441ab72af7404137440e
   */
  vpcAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcAccessId: 'VpcAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcAccessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

