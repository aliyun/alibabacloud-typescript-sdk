// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLatestJobStartLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the value of success was false, the latest logs of the deployment were returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * "[main] INFO  org.apache.flink.runtime.entrypoint.ClusterEntrypoint        [] - --------------------------------------------------------------------------------\\n2024-05-22 11:46:39,871 [main] INFO  org.apache.flink.runtime.entrypoint.ClusterEntrypoint"
   */
  data?: string;
  /**
   * @remarks
   * If the value of success was false, an error code was returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * If the value of success was false, an error message was returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

