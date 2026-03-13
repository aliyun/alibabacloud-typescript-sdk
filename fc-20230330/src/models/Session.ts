// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";
import { PolarFsConfig } from "./PolarFsConfig";


export class Session extends $dara.Model {
  /**
   * @remarks
   * The ID of the function instance associated with the session.
   * 
   * @example
   * c-68999e02-16a1955c-d2a03d1ccs
   */
  containerId?: string;
  /**
   * @remarks
   * The time when the session was created.
   * 
   * @example
   * 2025-04-01T08:15:27Z
   */
  createdTime?: string;
  disableSessionIdReuse?: boolean;
  /**
   * @remarks
   * The name of the function to which the session belongs.
   * 
   * @example
   * functionName1
   */
  functionName?: string;
  /**
   * @remarks
   * The time when the session was last updated.
   * 
   * @example
   * 2025-04-01T18:15:27Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The File Storage NAS (NAS) configuration. Once configured, the instance associated with the session can access designated NAS resources.
   */
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  polarFsConfig?: PolarFsConfig;
  /**
   * @remarks
   * The qualifier specified when creating a session. If not provided, the default value is LATEST.
   * 
   * @example
   * AliasName1
   */
  qualifier?: string;
  /**
   * @remarks
   * The session affinity type.
   * 
   * @example
   * HEADER_FIELD
   */
  sessionAffinityType?: string;
  /**
   * @remarks
   * The unique identifier of the function session.
   * 
   * @example
   * 81f70ae156904eb9b7d43e12f511fe58
   */
  sessionId?: string;
  /**
   * @remarks
   * The timeout period for idle sessions.
   * 
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The session status, which can be either Active (session is valid) or Expired (session has expired).
   * 
   * @example
   * Active
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The maximum session lifecycle.
   * 
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
      ossMountConfig: 'ossMountConfig',
      polarFsConfig: 'polarFsConfig',
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
      ossMountConfig: OSSMountConfig,
      polarFsConfig: PolarFsConfig,
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
    if(this.ossMountConfig && typeof (this.ossMountConfig as any).validate === 'function') {
      (this.ossMountConfig as any).validate();
    }
    if(this.polarFsConfig && typeof (this.polarFsConfig as any).validate === 'function') {
      (this.polarFsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

