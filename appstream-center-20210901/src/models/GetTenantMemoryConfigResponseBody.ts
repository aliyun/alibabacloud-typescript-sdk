// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTenantMemoryConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * This field is not enabled. The current query result does not provide the disable reason. The example is used to illustrate the field status.
   * 
   * @example
   * N/A (not enabled)
   */
  disabledReason?: string;
  /**
   * @remarks
   * This field is not enabled. The current query result does not provide the effective switch of the instance.
   */
  effectiveEnabled?: boolean;
  /**
   * @remarks
   * The tenant-level memory switch for the corresponding business combination. A value of `true` indicates that the switch is enabled, and a value of `false` indicates that the switch is disabled. This field may be omitted if no switch is configured for the combination.
   */
  enabled?: boolean;
  /**
   * @remarks
   * This field is not enabled. The current query result does not provide the instance desired switch.
   */
  instanceDesiredEnabled?: boolean;
  /**
   * @remarks
   * This field is not enabled. To obtain the tenant-level configuration switch returned by the current API operation, read the Enabled field.
   */
  tenantEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      disabledReason: 'DisabledReason',
      effectiveEnabled: 'EffectiveEnabled',
      enabled: 'Enabled',
      instanceDesiredEnabled: 'InstanceDesiredEnabled',
      tenantEnabled: 'TenantEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabledReason: 'string',
      effectiveEnabled: 'boolean',
      enabled: 'boolean',
      instanceDesiredEnabled: 'boolean',
      tenantEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTenantMemoryConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tenant memory configuration that matches the business combination.
   */
  data?: GetTenantMemoryConfigResponseBodyData;
  /**
   * @remarks
   * The unique identifier of the request, which can be used for troubleshooting.
   * 
   * @example
   * 01A1CEEB-CDFF-18F9-B2BF-9997600D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTenantMemoryConfigResponseBodyData,
      requestId: 'string',
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

