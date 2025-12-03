// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNoticeConfigRequest extends $dara.Model {
  bizType?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 60.191.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
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

