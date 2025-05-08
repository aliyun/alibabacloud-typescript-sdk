// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayDomainResponseBodyDataComment extends $dara.Model {
  /**
   * @remarks
   * The route status.
   * 
   * @example
   * Error
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

