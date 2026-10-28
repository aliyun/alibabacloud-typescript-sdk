// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateReadonlyModeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration. The value is fixed to readonly.
   * 
   * @example
   * readonly
   */
  configName?: string;
  /**
   * @remarks
   * Indicates whether a configuration record already exists.
   * 
   * @example
   * true
   */
  exists?: boolean;
  /**
   * @remarks
   * The last update time in ISO 8601 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  gmtUpdate?: string;
  /**
   * @remarks
   * The currently active configuration value, returned as the string true or false.
   * 
   * @example
   * true
   */
  value?: string;
  /**
   * @remarks
   * The type of the configuration value. The value is BOOL for this API operation.
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

export class UpdateReadonlyModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The currently active configuration information.
   */
  data?: UpdateReadonlyModeResponseBodyData;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. A value of true indicates success.
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
      data: UpdateReadonlyModeResponseBodyData,
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

