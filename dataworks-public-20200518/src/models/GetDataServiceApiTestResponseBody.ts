// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApiTestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Test API Id
   * 
   * @example
   * 12343
   */
  apiId?: number;
  /**
   * @remarks
   * Time consuming
   * 
   * @example
   * 10
   */
  costTime?: string;
  /**
   * @remarks
   * Debug information
   * 
   * @example
   * [<span style=\\"color: #92D581;\\">INFO</span>] [16:15:13.240] resource group is 498774069027041[<span style=\\"color: #92D581;\\">INFO</span>]
   */
  debugInfo?: string;
  /**
   * @remarks
   * Node Debug information
   * 
   * @example
   * [<span style=\\"color: #92D581;\\">INFO</span>] [16:15:13.240] resource group is 498774069027041[<span style=\\"color: #92D581;\\">INFO</span>]
   */
  nodesDebugInfo?: string;
  /**
   * @remarks
   * Test API request parameters
   * 
   * @example
   * {"name":"test"}
   */
  paramMap?: string;
  /**
   * @remarks
   * The test API returns the code. If it is not completed, the data is empty.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * Return data
   * 
   * @example
   * {"id":2}
   */
  retResult?: string;
  /**
   * @remarks
   * Whether the task has been completed, including: RUNNING,FINISHED
   * 
   * @example
   * FINISHED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      costTime: 'CostTime',
      debugInfo: 'DebugInfo',
      nodesDebugInfo: 'NodesDebugInfo',
      paramMap: 'ParamMap',
      retCode: 'RetCode',
      retResult: 'RetResult',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      costTime: 'string',
      debugInfo: 'string',
      nodesDebugInfo: 'string',
      paramMap: 'string',
      retCode: 'number',
      retResult: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiTestResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return object
   */
  data?: GetDataServiceApiTestResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * adssdsewe
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
      data: GetDataServiceApiTestResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

