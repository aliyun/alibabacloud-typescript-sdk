// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnrolledAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 19534534552****
   */
  accountUid?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

