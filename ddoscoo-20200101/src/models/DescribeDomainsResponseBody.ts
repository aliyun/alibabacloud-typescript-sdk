// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of details of the domain name for which the forwarding rules are configured.
   */
  domains?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F908E959-ADA8-4D7B-8A05-FF2F67F50964
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

