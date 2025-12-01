// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSafetyCoverResponseBodyDataCfwProtection extends $dara.Model {
  /**
   * @remarks
   * Number of unprotected items.
   * 
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @remarks
   * Number of protected items.
   * 
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @remarks
   * Year-over-year protection rate.
   * 
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @remarks
   * Protection rate.
   * 
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
   * @remarks
   * Total quantity.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noProtectionCount: 'NoProtectionCount',
      protectionCount: 'ProtectionCount',
      protectionGrowthRate: 'ProtectionGrowthRate',
      protectionRate: 'ProtectionRate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noProtectionCount: 'number',
      protectionCount: 'number',
      protectionGrowthRate: 'string',
      protectionRate: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyDataEcsProtection extends $dara.Model {
  /**
   * @remarks
   * Number of unprotected items.
   * 
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @remarks
   * Number of protected items.
   * 
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @remarks
   * Year-over-year growth in protection rate.
   * 
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @remarks
   * Protection rate.
   * 
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noProtectionCount: 'NoProtectionCount',
      protectionCount: 'ProtectionCount',
      protectionGrowthRate: 'ProtectionGrowthRate',
      protectionRate: 'ProtectionRate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noProtectionCount: 'number',
      protectionCount: 'number',
      protectionGrowthRate: 'string',
      protectionRate: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyDataWafProtection extends $dara.Model {
  /**
   * @remarks
   * Number of unprotected items.
   * 
   * @example
   * 5
   */
  noProtectionCount?: number;
  /**
   * @remarks
   * Number of protected items.
   * 
   * @example
   * 5
   */
  protectionCount?: number;
  /**
   * @remarks
   * Year-over-year growth in protection rate.
   * 
   * @example
   * 35.00
   */
  protectionGrowthRate?: string;
  /**
   * @remarks
   * Protection rate.
   * 
   * @example
   * 50.00
   */
  protectionRate?: string;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noProtectionCount: 'NoProtectionCount',
      protectionCount: 'ProtectionCount',
      protectionGrowthRate: 'ProtectionGrowthRate',
      protectionRate: 'ProtectionRate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noProtectionCount: 'number',
      protectionCount: 'number',
      protectionGrowthRate: 'string',
      protectionRate: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * CFW protection coverage.
   */
  cfwProtection?: GetSafetyCoverResponseBodyDataCfwProtection;
  /**
   * @remarks
   * ECS protection coverage.
   */
  ecsProtection?: GetSafetyCoverResponseBodyDataEcsProtection;
  /**
   * @remarks
   * WAF protection coverage.
   */
  wafProtection?: GetSafetyCoverResponseBodyDataWafProtection;
  static names(): { [key: string]: string } {
    return {
      cfwProtection: 'CfwProtection',
      ecsProtection: 'EcsProtection',
      wafProtection: 'WafProtection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cfwProtection: GetSafetyCoverResponseBodyDataCfwProtection,
      ecsProtection: GetSafetyCoverResponseBodyDataEcsProtection,
      wafProtection: GetSafetyCoverResponseBodyDataWafProtection,
    };
  }

  validate() {
    if(this.cfwProtection && typeof (this.cfwProtection as any).validate === 'function') {
      (this.cfwProtection as any).validate();
    }
    if(this.ecsProtection && typeof (this.ecsProtection as any).validate === 'function') {
      (this.ecsProtection as any).validate();
    }
    if(this.wafProtection && typeof (this.wafProtection as any).validate === 'function') {
      (this.wafProtection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSafetyCoverResponseBody extends $dara.Model {
  /**
   * @remarks
   * API return code.
   * 
   * @example
   * 404
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetSafetyCoverResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Message of the response result.
   * 
   * @example
   * system error
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 564f8bb9-df3c-42a0-877a-b35d48f66603
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful:
   * - **true**: Call succeeded.
   * - **false**: Call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSafetyCoverResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

