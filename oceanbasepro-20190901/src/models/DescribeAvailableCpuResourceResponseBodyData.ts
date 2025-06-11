// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableCpuResourceResponseBodyData extends $dara.Model {
  /**
   * @example
   * UnitNum.RejectComment.Storage
   */
  comment?: string;
  /**
   * @example
   * 10
   */
  maxCpu?: number;
  /**
   * @example
   * 2
   */
  minCpu?: number;
  /**
   * @example
   * UnitNum.Change.Accept
   */
  reviewCode?: string;
  /**
   * @example
   * 2
   */
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      maxCpu: 'MaxCpu',
      minCpu: 'MinCpu',
      reviewCode: 'ReviewCode',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      maxCpu: 'number',
      minCpu: 'number',
      reviewCode: 'string',
      unitNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

