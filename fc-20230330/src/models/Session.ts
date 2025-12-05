// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NASConfig } from "./Nasconfig";


export class Session extends $dara.Model {
  /**
   * @example
   * c-68999e02-16a1955c-d2a03d1ccs
   */
  containerId?: string;
  /**
   * @example
   * 2025-04-01T08:15:27Z
   */
  createdTime?: string;
  disableSessionIdReuse?: boolean;
  /**
   * @example
   * functionName1
   */
  functionName?: string;
  /**
   * @example
   * 2025-04-01T18:15:27Z
   */
  lastModifiedTime?: string;
  nasConfig?: NASConfig;
  /**
   * @example
   * AliasName1
   */
  qualifier?: string;
  /**
   * @example
   * HEADER_FIELD
   */
  sessionAffinityType?: string;
  /**
   * @example
   * 81f70ae156904eb9b7d43e12f511fe58
   */
  sessionId?: string;
  /**
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @example
   * Active
   */
  sessionStatus?: string;
  /**
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      containerId: 'containerId',
      createdTime: 'createdTime',
      disableSessionIdReuse: 'disableSessionIdReuse',
      functionName: 'functionName',
      lastModifiedTime: 'lastModifiedTime',
      nasConfig: 'nasConfig',
      qualifier: 'qualifier',
      sessionAffinityType: 'sessionAffinityType',
      sessionId: 'sessionId',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionStatus: 'sessionStatus',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      createdTime: 'string',
      disableSessionIdReuse: 'boolean',
      functionName: 'string',
      lastModifiedTime: 'string',
      nasConfig: NASConfig,
      qualifier: 'string',
      sessionAffinityType: 'string',
      sessionId: 'string',
      sessionIdleTimeoutInSeconds: 'number',
      sessionStatus: 'string',
      sessionTTLInSeconds: 'number',
    };
  }

  validate() {
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

