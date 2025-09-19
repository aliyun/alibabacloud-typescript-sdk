// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSecurityEventIdRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of alert events. You can specify up to 100 IDs. If you do not specify this parameter, the value of the response parameter **Data** is **false**. The value false indicates that no alert events are generated on the server.
   * 
   * > You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to query the IDs of alert events.
   * 
   * @example
   * ["1234567","98765432"]
   */
  securityEventIds?: string[];
  /**
   * @remarks
   * The UUID of the server.
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 96ad2473-bc60-45ba-ad1c-932e2866****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      securityEventIds: 'SecurityEventIds',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityEventIds)) {
      $dara.Model.validateArray(this.securityEventIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

