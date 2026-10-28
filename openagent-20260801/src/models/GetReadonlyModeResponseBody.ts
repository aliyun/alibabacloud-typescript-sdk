// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReadonlyModeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration name. The value is fixed to readonly.
   * 
   * @example
   * readonly
   */
  configName?: string;
  /**
   * @remarks
   * Indicates whether a configuration record exists.
   * 
   * @example
   * true
   */
  exists?: boolean;
  /**
   * @remarks
   * The last update time in ISO 8601 format. The value is null if no configuration record exists.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  gmtUpdate?: string;
  /**
   * @remarks
   * The current effective read-only mode, returned as a string. A value of true indicates that the mode is enabled, and a value of false indicates that the mode is disabled. The value is true if not configured.
   * 
   * @example
   * true
   */
  value?: string;
  /**
   * @remarks
   * The configuration value type. The value is fixed to BOOL.
   * 
   * @example
   * BOOL
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'configName',
      exists: 'exists',
      gmtUpdate: 'gmtUpdate',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      exists: 'boolean',
      gmtUpdate: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReadonlyModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetReadonlyModeResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetReadonlyModeResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

