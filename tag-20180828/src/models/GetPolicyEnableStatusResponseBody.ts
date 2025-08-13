// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyEnableStatusResponseBodyStatusModels extends $dara.Model {
  /**
   * @remarks
   * The status of the Tag Policy feature. Valid values:
   * 
   * *   PendingEnable: The feature is being enabled.
   * *   Enabled: The feature is enabled.
   * *   Closing: The feature is being disabled.
   * *   Disabled: The feature is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The mode of the Tag Policy feature. Valid values:
   * 
   * *   USER: single-account mode
   * *   RD: multi-account mode
   * 
   * For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](https://help.aliyun.com/document_detail/417434.html).
   * 
   * @example
   * RD
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyEnableStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6C8DF1B1-C65F-5D3A-9FDA-26A4683BB36B
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the Tag Policy feature.
   */
  statusModels?: GetPolicyEnableStatusResponseBodyStatusModels[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusModels: 'StatusModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusModels: { 'type': 'array', 'itemType': GetPolicyEnableStatusResponseBodyStatusModels },
    };
  }

  validate() {
    if(Array.isArray(this.statusModels)) {
      $dara.Model.validateArray(this.statusModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

