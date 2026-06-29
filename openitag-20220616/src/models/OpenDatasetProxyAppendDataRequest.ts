// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenDatasetProxyAppendDataRequest extends $dara.Model {
  bizCode?: string;
  /**
   * @remarks
   * A list of data records. A single invocation can contain up to 100 records. Each element in the array is a map.
   */
  dataMeta?: { [key: string]: string }[];
  /**
   * @remarks
   * Task ID, indicating the task to which data is appended.
   * 
   * @example
   * 154***518306500608
   */
  taskId?: string;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * 0bc1ec3916825622257033399edb6b
   */
  traceId?: string;
  /**
   * @remarks
   * Unique identifier ID, controlled by the business side.
   * 
   * @example
   * e5c9db3f-f27c-445e-a52b-06ba6d1ba00f
   */
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      dataMeta: 'DataMeta',
      taskId: 'TaskId',
      traceId: 'TraceId',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      dataMeta: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      taskId: 'string',
      traceId: 'string',
      UUID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataMeta)) {
      $dara.Model.validateArray(this.dataMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

