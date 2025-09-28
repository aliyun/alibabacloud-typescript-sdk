// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEventRedeployInstanceResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * i-55qi8m11rr53c4i964md8a00l
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eventId: 'EventId',
      message: 'Message',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      eventId: 'string',
      message: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEventRedeployInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 125B04C7-3D0D-4245-AF96-14E3758E3F06
   */
  requestId?: string;
  results?: BatchEventRedeployInstanceResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchEventRedeployInstanceResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

