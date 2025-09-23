// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackSourceCidrRequest extends $dara.Model {
  ipVersion?: string;
  /**
   * @example
   * coop-line-001
   */
  line?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      line: 'Line',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      line: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

