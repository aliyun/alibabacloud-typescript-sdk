// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDatamaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data after it is masked. The data is a string in JSON format and includes the following fields:
   * 
   * - **dataHeaderList**: The column names of the masked data.
   * 
   * - **dataList**: The masked data. The order of the fields corresponds to the order of the column names.
   * 
   * - **ruleList**: The sensitive data type IDs. Each ID corresponds to the unique ID of a sensitive data type that is returned by the [DescribeRules](https://help.aliyun.com/document_detail/410141.html) operation.
   * 
   * @example
   * {"dataHeaderList":["name","age"],"dataList":[["l***",18],["l***",17]],"ruleList":[1002,null]}
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique ID for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 813BA9FA-D062-42C4-8CD5-11A7640B96E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

