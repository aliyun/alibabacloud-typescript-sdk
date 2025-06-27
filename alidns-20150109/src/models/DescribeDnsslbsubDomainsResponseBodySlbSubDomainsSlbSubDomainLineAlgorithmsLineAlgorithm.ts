// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm extends $dara.Model {
  /**
   * @remarks
   * The DNS resolution line. The line can be China Telecom, China Mobile, and China Unicom.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * Indicates whether weighted round-robin is enabled for the line. Valid values:
   * 
   * *   **true** (default): Weighted round-robin is enabled.
   * *   **false**: Weighted round-robin is disabled.
   * 
   * @example
   * true
   */
  open?: boolean;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      open: 'Open',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      open: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

