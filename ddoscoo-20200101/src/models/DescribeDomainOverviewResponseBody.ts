// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The peak queries per second (QPS) during HTTP traffic scrubbing. Unit: QPS.
   * 
   * @example
   * 41652
   */
  maxHttp?: number;
  /**
   * @remarks
   * The peak QPS during HTTPS traffic scrubbing. Unit: QPS.
   * 
   * @example
   * 0
   */
  maxHttps?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxHttp: 'MaxHttp',
      maxHttps: 'MaxHttps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxHttp: 'number',
      maxHttps: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

