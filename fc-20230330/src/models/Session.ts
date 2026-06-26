// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JuiceFsConfig } from "./JuiceFsConfig";
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
  /**
   * @remarks
   * Specifies whether an expired session ID can be reused. If `true`, an expired session ID cannot be reused. If `false` (the default), sending a request with an expired session ID creates a new session bound to a new instance.
   * 
   * @example
   * false
   */
  disableSessionIdReuse?: boolean;
  /**
   * @remarks
   * The name of the function associated with the session.
   * 
   * @example
   * functionName1
   */
  functionName?: string;
  /**
   * @remarks
   * The JuiceFS mount configuration, enabling the associated function instance to access specified JuiceFS resources.
   */
  juiceFsConfig?: JuiceFsConfig;
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
   * The NAS configuration, enabling the associated function instance to access specified NAS resources.
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * The OSS mount configuration, enabling the associated function instance to access specified OSS resources.
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * The PolarFS mount configuration, enabling the associated function instance to access specified PolarFS resources.
   */
  polarFsConfig?: PolarFsConfig;
  /**
   * @remarks
   * The qualifier, which specifies a function version or alias. Defaults to `LATEST` if unspecified.
   * 
   * @example
   * AliasName1
   */
  qualifier?: string;
  /**
   * @remarks
   * The type of session affinity.
   * 
   * @example
   * HEADER_FIELD
   */
  sessionAffinityType?: string;
  /**
   * @remarks
   * The unique identifier for the function session.
   * 
   * @example
   * 81f70ae156904eb9b7d43e12f511fe58
   */
  sessionId?: string;
  /**
   * @remarks
   * The maximum duration, in seconds, that the session can be idle before it expires.
   * 
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The status of the session. `Active` indicates the session is valid, and `Expired` indicates it is no longer valid.
   * 
   * @example
   * Active
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The maximum lifespan of the session, in seconds.
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
      juiceFsConfig: 'juiceFsConfig',
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
      juiceFsConfig: JuiceFsConfig,
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
    if(this.juiceFsConfig && typeof (this.juiceFsConfig as any).validate === 'function') {
      (this.juiceFsConfig as any).validate();
    }
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

