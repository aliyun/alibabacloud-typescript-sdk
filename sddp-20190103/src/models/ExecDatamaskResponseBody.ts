// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDatamaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The de-identified data, which is described in a JSON string. The JSON string contains the following parameters:
   * 
   * *   **dataHeaderList**: the names of columns that contain the de-identified data.
   * *   **dataList**: the de-identified data. The column order of the de-identified data is the same as that indicated by the dataHeaderList parameter.
   * *   **ruleList**: the IDs of sensitive data detection rules.
   * 
   * @example
   * {"dataHeaderList":["name","age"],"dataList":[["l***",18],["l***",17]],"ruleList":[1002,null]}
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

