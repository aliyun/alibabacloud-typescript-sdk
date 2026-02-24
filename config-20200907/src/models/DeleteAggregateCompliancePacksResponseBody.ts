// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks extends $dara.Model {
  compliancePackId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult extends $dara.Model {
  operateCompliancePacks?: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks[];
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacks: 'OperateCompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacks: { 'type': 'array', 'itemType': DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks },
    };
  }

  validate() {
    if(Array.isArray(this.operateCompliancePacks)) {
      $dara.Model.validateArray(this.operateCompliancePacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateCompliancePacksResponseBody extends $dara.Model {
  operateCompliancePacksResult?: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacksResult: 'OperateCompliancePacksResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacksResult: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.operateCompliancePacksResult && typeof (this.operateCompliancePacksResult as any).validate === 'function') {
      (this.operateCompliancePacksResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

