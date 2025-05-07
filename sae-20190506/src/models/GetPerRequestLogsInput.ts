// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPerRequestLogsInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  errorType?: string;
  forwardLine?: number;
  instanceID?: string;
  isColdStart?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  requestID?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      errorType: 'errorType',
      forwardLine: 'forwardLine',
      instanceID: 'instanceID',
      isColdStart: 'isColdStart',
      requestID: 'requestID',
      startTime: 'startTime',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      errorType: 'string',
      forwardLine: 'number',
      instanceID: 'string',
      isColdStart: 'boolean',
      requestID: 'string',
      startTime: 'number',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

