// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableMultiAccountResourceCenterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 767038B7-2027-5508-858B-E213232D57D5
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the feature. Valid values:
   * 
   * *   Pending: The feature is being enabled.
   * *   Enabled: The feature is enabled.
   * 
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

