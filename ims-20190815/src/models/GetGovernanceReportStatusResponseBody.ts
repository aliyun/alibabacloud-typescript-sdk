// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGovernanceReportStatusResponseBodyGovernanceItemsStatusGovernanceItemStatus extends $dara.Model {
  /**
   * @example
   * AccountRecentUsingAccessKey
   */
  governanceItem?: string;
  /**
   * @example
   * Progressing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      governanceItem: 'GovernanceItem',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      governanceItem: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceReportStatusResponseBodyGovernanceItemsStatus extends $dara.Model {
  governanceItemStatus?: GetGovernanceReportStatusResponseBodyGovernanceItemsStatusGovernanceItemStatus[];
  static names(): { [key: string]: string } {
    return {
      governanceItemStatus: 'GovernanceItemStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      governanceItemStatus: { 'type': 'array', 'itemType': GetGovernanceReportStatusResponseBodyGovernanceItemsStatusGovernanceItemStatus },
    };
  }

  validate() {
    if(Array.isArray(this.governanceItemStatus)) {
      $dara.Model.validateArray(this.governanceItemStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceReportStatusResponseBody extends $dara.Model {
  governanceItemsStatus?: GetGovernanceReportStatusResponseBodyGovernanceItemsStatus;
  /**
   * @example
   * F2CE9688-AA85-5F23-8C22-0EC23473405A
   */
  requestId?: string;
  /**
   * @example
   * Progressing
   */
  wholeReportStatus?: string;
  static names(): { [key: string]: string } {
    return {
      governanceItemsStatus: 'GovernanceItemsStatus',
      requestId: 'RequestId',
      wholeReportStatus: 'WholeReportStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      governanceItemsStatus: GetGovernanceReportStatusResponseBodyGovernanceItemsStatus,
      requestId: 'string',
      wholeReportStatus: 'string',
    };
  }

  validate() {
    if(this.governanceItemsStatus && typeof (this.governanceItemsStatus as any).validate === 'function') {
      (this.governanceItemsStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

