// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusGlobalViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. Description 200 means success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The list of global aggregation instances. The value of this parameter is a string in the JSON format.
   * 
   * @example
   * [ {groupName: "the name of the global aggregation instance", clusterId: "global-v2-clusterid", endpoint: "cn-hangzhou"}, // ..... more items ]
   */
  data?: string;
  /**
   * @remarks
   * More information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * DBDCE95A-A0DD-5FC5-97CC-EEFC3D814385
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

