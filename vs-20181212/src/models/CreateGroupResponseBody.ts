// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * National standard ID associated with the workspace. (Applies only to workspaces using national standard ingest.)
   * 
   * @example
   * 31000000****00000001
   */
  gbId?: string;
  /**
   * @remarks
   * IP address of the national standard signaling gateway server associated with the workspace. (Applies only to workspaces using national standard ingest.)
   * 
   * @example
   * 10.10.10.10
   */
  gbIp?: string;
  /**
   * @remarks
   * National standard signaling server port provided by the workspace. (Applies only to workspaces using national standard ingest.)
   * 
   * @example
   * 5060
   */
  gbPort?: number;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 33763****77224964-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      gbIp: 'GbIp',
      gbPort: 'GbPort',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      gbIp: 'string',
      gbPort: 'number',
      id: 'string',
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

