// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductInstancesResponseBodyProductInstancesAccessPortAndProtocols extends $dara.Model {
  certificateIds?: string[];
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certificateIds: 'CertificateIds',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificateIds)) {
      $dara.Model.validateArray(this.certificateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

