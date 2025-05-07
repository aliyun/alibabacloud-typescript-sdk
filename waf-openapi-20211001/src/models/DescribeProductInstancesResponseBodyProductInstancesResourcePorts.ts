// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates } from "./DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates";


export class DescribeProductInstancesResponseBodyProductInstancesResourcePorts extends $dara.Model {
  /**
   * @remarks
   * The information about the certificates.
   */
  certificates?: DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates[];
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **http**
   * *   **https**
   * 
   * @example
   * https
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates },
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

