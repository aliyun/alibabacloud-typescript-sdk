// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSwimmingLaneGroupTagsResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"version":"1.0.0","owner":"team-a"}
   */
  metadata?: string;
  /**
   * @example
   * {"alicloud.service.tag":"g1"}
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupTagsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListSwimmingLaneGroupTagsResponseBodyData[];
  errorCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 30375C38-F4ED-4135-A0AE-5C75DC7F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * ac1a0b2215622920113732501e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSwimmingLaneGroupTagsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

