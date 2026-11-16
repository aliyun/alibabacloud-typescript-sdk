// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstagramUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-xd***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 989978****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      queryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

