// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks extends $dara.Model {
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

export class DeleteCompliancePacksResponseBodyOperateCompliancePacksResult extends $dara.Model {
  operateCompliancePacks?: DeleteCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks[];
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacks: 'OperateCompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacks: { 'type': 'array', 'itemType': DeleteCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks },
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

export class DeleteCompliancePacksResponseBody extends $dara.Model {
  operateCompliancePacksResult?: DeleteCompliancePacksResponseBodyOperateCompliancePacksResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacksResult: 'OperateCompliancePacksResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacksResult: DeleteCompliancePacksResponseBodyOperateCompliancePacksResult,
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

