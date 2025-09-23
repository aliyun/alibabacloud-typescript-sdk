// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsOpenStatusRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

