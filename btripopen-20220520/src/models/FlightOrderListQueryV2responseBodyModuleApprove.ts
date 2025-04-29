// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModuleApprove extends $dara.Model {
  /**
   * @example
   * test1234
   */
  approveId?: number;
  btripTitle?: string;
  /**
   * @example
   * 1233544
   */
  exceedApproveId?: string;
  /**
   * @example
   * 100231431
   */
  thirdpartApproveId?: string;
  /**
   * @example
   * test123
   */
  thirdpartExceedApproveId?: string;
  static names(): { [key: string]: string } {
    return {
      approveId: 'approve_id',
      btripTitle: 'btrip_title',
      exceedApproveId: 'exceed_approve_id',
      thirdpartApproveId: 'thirdpart_approve_id',
      thirdpartExceedApproveId: 'thirdpart_exceed_approve_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveId: 'number',
      btripTitle: 'string',
      exceedApproveId: 'string',
      thirdpartApproveId: 'string',
      thirdpartExceedApproveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

