// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConnectionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The connectivity of DTS servers to the destination database.
   * 
   * @example
   * {     "connectDetail": [       {         "testName": "PolarDB_o JDBC Connect",         "testSuccess": true       },       {         "testName": "Ping ",         "testSuccess": true       },       {         "testName": "Telnet ",         "testSuccess": true       }     ],     "connectRes": true,     "connectAdvice": ""   }
   */
  destinationConnectionStatus?: { [key: string]: any };
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A47C784-70EF-4111-8677-369CAA00****
   */
  requestId?: string;
  /**
   * @remarks
   * The connectivity of DTS servers to the source database.
   * 
   * @example
   * {     "connectDetail": [       {         "testName": "Oracle JDBC Connect",         "testSuccess": true       },       {         "testName": "Ping ",         "testSuccess": false       },       {         "testName": "Telnet ",         "testSuccess": true       }     ],     "connectRes": true,     "connectAdvice": ""   }
   */
  sourceConnectionStatus?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      destinationConnectionStatus: 'DestinationConnectionStatus',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      sourceConnectionStatus: 'SourceConnectionStatus',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationConnectionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      sourceConnectionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'string',
    };
  }

  validate() {
    if(this.destinationConnectionStatus) {
      $dara.Model.validateMap(this.destinationConnectionStatus);
    }
    if(this.sourceConnectionStatus) {
      $dara.Model.validateMap(this.sourceConnectionStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

