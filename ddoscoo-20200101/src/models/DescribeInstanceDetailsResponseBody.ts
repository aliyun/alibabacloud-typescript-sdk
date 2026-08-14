// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos extends $dara.Model {
  certConfigured?: boolean;
  eip?: string;
  functionVersion?: string;
  ipMode?: string;
  ipVersion?: string;
  ssl13Enabled?: boolean;
  status?: string;
  tlsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      certConfigured: 'CertConfigured',
      eip: 'Eip',
      functionVersion: 'FunctionVersion',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
      ssl13Enabled: 'Ssl13Enabled',
      status: 'Status',
      tlsVersion: 'TlsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certConfigured: 'boolean',
      eip: 'string',
      functionVersion: 'string',
      ipMode: 'string',
      ipVersion: 'string',
      ssl13Enabled: 'boolean',
      status: 'string',
      tlsVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBodyInstanceDetails extends $dara.Model {
  eipInfos?: DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos[];
  instanceId?: string;
  line?: string;
  static names(): { [key: string]: string } {
    return {
      eipInfos: 'EipInfos',
      instanceId: 'InstanceId',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfos: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfos },
      instanceId: 'string',
      line: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipInfos)) {
      $dara.Model.validateArray(this.eipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBody extends $dara.Model {
  instanceDetails?: DescribeInstanceDetailsResponseBodyInstanceDetails[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDetails: 'InstanceDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDetails: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceDetails)) {
      $dara.Model.validateArray(this.instanceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

