// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonOverallConfigListRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 119.136.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The types of the configuration items.
   * 
   * >  You can query up to 50 types at a time.
   * 
   * This parameter is required.
   */
  typeList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      typeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

