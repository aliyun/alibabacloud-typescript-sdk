// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrefixListsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 47.100.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
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

