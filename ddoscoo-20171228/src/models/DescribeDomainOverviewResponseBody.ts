// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainOverviewResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  maxHttp?: number;
  /**
   * @example
   * 0
   */
  maxHttps?: number;
  /**
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

