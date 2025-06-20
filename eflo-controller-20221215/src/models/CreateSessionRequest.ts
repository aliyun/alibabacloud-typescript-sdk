// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * e01-cn-kvw44e6dn04
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the session corresponding to the session package.
   * 
   * @example
   * Valid values: Sol (default): based on serial port Assistant: based on cloud assistant
   */
  sessionType?: string;
  /**
   * @remarks
   * The start time. The value is a 13-digit timestamp.
   * 
   * @example
   * 1669340937156
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      sessionType: 'SessionType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      sessionType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

