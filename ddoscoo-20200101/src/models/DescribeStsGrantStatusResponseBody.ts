// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStsGrantStatusResponseBodyStsGrant extends $dara.Model {
  /**
   * @remarks
   * The authorization status. Valid values:
   * 
   * *   **0**: Anti-DDoS Pro or Anti-DDoS Premium is not authorized to access other cloud services.
   * *   **1**: Anti-DDoS Pro or Anti-DDoS Premium is authorized to access other cloud services.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStsGrantStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6623EA1F-30FB-5BC8-BEC9-74D55F6F08F1
   */
  requestId?: string;
  /**
   * @remarks
   * The authorization status of Anti-DDoS Pro or Anti-DDoS Premium.
   */
  stsGrant?: DescribeStsGrantStatusResponseBodyStsGrant;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stsGrant: 'StsGrant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stsGrant: DescribeStsGrantStatusResponseBodyStsGrant,
    };
  }

  validate() {
    if(this.stsGrant && typeof (this.stsGrant as any).validate === 'function') {
      (this.stsGrant as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

