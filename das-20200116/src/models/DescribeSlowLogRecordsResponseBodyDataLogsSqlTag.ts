// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyDataLogsSqlTag extends $dara.Model {
  /**
   * @example
   * test
   */
  comments?: string;
  /**
   * @remarks
   * sqlid。
   * 
   * @example
   * 8ad7069f236bcdaaa9b3ae4b6299****
   */
  sqlId?: string;
  /**
   * @example
   * DAS_IMPORTANT,DAS_IN_PLAN
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

