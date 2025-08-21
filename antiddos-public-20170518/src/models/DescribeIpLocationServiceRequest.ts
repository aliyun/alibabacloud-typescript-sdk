// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpLocationServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the asset to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 121.199.XX.XX
   */
  internetIp?: string;
  static names(): { [key: string]: string } {
    return {
      internetIp: 'InternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

