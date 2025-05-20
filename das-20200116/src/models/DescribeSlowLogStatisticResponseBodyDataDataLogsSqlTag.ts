// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogStatisticResponseBodyDataDataLogsSqlTag extends $dara.Model {
  comments?: string;
  /**
   * @remarks
   * SQL ID。
   * 
   * @example
   * a3931d8c3a9315dd5ed016d71cf*****
   */
  sqlId?: string;
  /**
   * @example
   * DAS_IN_PLAN
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      sqlId: 'SqlId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      sqlId: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

