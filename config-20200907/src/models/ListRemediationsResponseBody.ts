// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationsResponseBodyRemediations extends $dara.Model {
  accountId?: number;
  configRuleId?: string;
  invokeType?: string;
  lastSuccessfulInvocationId?: string;
  lastSuccessfulInvocationTime?: number;
  lastSuccessfulInvocationType?: string;
  remediationId?: string;
  remediationOriginParams?: string;
  remediationSourceType?: string;
  remediationTemplateId?: string;
  remediationType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configRuleId: 'ConfigRuleId',
      invokeType: 'InvokeType',
      lastSuccessfulInvocationId: 'LastSuccessfulInvocationId',
      lastSuccessfulInvocationTime: 'LastSuccessfulInvocationTime',
      lastSuccessfulInvocationType: 'LastSuccessfulInvocationType',
      remediationId: 'RemediationId',
      remediationOriginParams: 'RemediationOriginParams',
      remediationSourceType: 'RemediationSourceType',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configRuleId: 'string',
      invokeType: 'string',
      lastSuccessfulInvocationId: 'string',
      lastSuccessfulInvocationTime: 'number',
      lastSuccessfulInvocationType: 'string',
      remediationId: 'string',
      remediationOriginParams: 'string',
      remediationSourceType: 'string',
      remediationTemplateId: 'string',
      remediationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  remediations?: ListRemediationsResponseBodyRemediations[];
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remediations: 'Remediations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      remediations: { 'type': 'array', 'itemType': ListRemediationsResponseBodyRemediations },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediations)) {
      $dara.Model.validateArray(this.remediations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

