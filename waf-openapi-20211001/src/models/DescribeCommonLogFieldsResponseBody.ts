// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonLogFieldsResponseBodyLogFieldList extends $dara.Model {
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * true
   */
  isRequired?: boolean;
  /**
   * @example
   * final_action
   */
  logKey?: string;
  /**
   * @example
   * 1
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      isRequired: 'IsRequired',
      logKey: 'LogKey',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      isRequired: 'boolean',
      logKey: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonLogFieldsResponseBody extends $dara.Model {
  logFieldList?: DescribeCommonLogFieldsResponseBodyLogFieldList[];
  /**
   * @example
   * AB0775EB-2594-598A-97E1-51B1*******
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logFieldList: 'LogFieldList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logFieldList: { 'type': 'array', 'itemType': DescribeCommonLogFieldsResponseBodyLogFieldList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logFieldList)) {
      $dara.Model.validateArray(this.logFieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

