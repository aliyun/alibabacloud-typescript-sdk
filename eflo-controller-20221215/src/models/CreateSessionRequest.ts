// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSessionRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * e01-cn-kvw44e6dn04
   */
  nodeId?: string;
  /**
   * @remarks
   * Session type corresponding to the session package.
   * 
   * @example
   * N	两种：
   * Sol：基于串口[默认]
   * Assistant：基于云助手
   */
  sessionType?: string;
  /**
   * @remarks
   * Initiation time, 13-digit timestamp.
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

