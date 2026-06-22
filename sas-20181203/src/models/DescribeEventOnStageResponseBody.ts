// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventOnStageResponseBodySecurityEventStageResponse extends $dara.Model {
  /**
   * @remarks
   * The platforms supported by threat detection.
   * 
   * - **container**: container
   * - **linux**: linux
   * - **windows**: windows.
   */
  securityEventOnStag?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      securityEventOnStag: 'SecurityEventOnStag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventOnStag: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.securityEventOnStag) {
      $dara.Model.validateMap(this.securityEventOnStag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventOnStageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generated for the request.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E332241XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The platforms supported by threat detection.
   */
  securityEventStageResponse?: DescribeEventOnStageResponseBodySecurityEventStageResponse;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventStageResponse: 'SecurityEventStageResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventStageResponse: DescribeEventOnStageResponseBodySecurityEventStageResponse,
    };
  }

  validate() {
    if(this.securityEventStageResponse && typeof (this.securityEventStageResponse as any).validate === 'function') {
      (this.securityEventStageResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

