// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonLogFieldsResponseBodyLogFieldList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the log field is a default field.
   * 
   * - **true**: The log field is a default field.
   * 
   * - **false**: The log field is not a default field.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the log field is required.
   * 
   * - **true**: The log field is required.
   * 
   * - **false**: The log field is not required.
   * 
   * @example
   * true
   */
  isRequired?: boolean;
  /**
   * @remarks
   * The name of the log field.
   * 
   * > For more information about the log fields, see [**Log field descriptions**](https://help.aliyun.com/zh/waf/web-application-firewall-3-0/user-guide/fields-in-logs?spm=openapi-amp.newDocPublishment.0.0.ccef281fNAb0XR).
   * 
   * @example
   * final_action
   */
  logKey?: string;
  /**
   * @remarks
   * The status of the log field. Valid values:
   * 
   * - **0**: offline.
   * 
   * - **1**: online or in use.
   * 
   * - **2**: about to be unpublished.
   * 
   * - **3**: about to be published.
   * 
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
  /**
   * @remarks
   * The list of log fields returned.
   */
  logFieldList?: DescribeCommonLogFieldsResponseBodyLogFieldList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AB0775EB-2594-598A-97E1-51B1*******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of log fields returned.
   * 
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

