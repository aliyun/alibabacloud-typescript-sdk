// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckTypesResponseBodyDataCheckDetails extends $dara.Model {
  /**
   * @remarks
   * The list of the baseline categories of attribution.
   */
  affiliatedRiskTypes?: string[];
  /**
   * @remarks
   * The list of baselines attribution.
   */
  affiliatedRisks?: string[];
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 31
   */
  checkId?: number;
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * Configure the idle session timeout period.
   */
  checkItem?: string;
  static names(): { [key: string]: string } {
    return {
      affiliatedRiskTypes: 'AffiliatedRiskTypes',
      affiliatedRisks: 'AffiliatedRisks',
      checkId: 'CheckId',
      checkItem: 'CheckItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affiliatedRiskTypes: { 'type': 'array', 'itemType': 'string' },
      affiliatedRisks: { 'type': 'array', 'itemType': 'string' },
      checkId: 'number',
      checkItem: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.affiliatedRiskTypes)) {
      $dara.Model.validateArray(this.affiliatedRiskTypes);
    }
    if(Array.isArray(this.affiliatedRisks)) {
      $dara.Model.validateArray(this.affiliatedRisks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckTypesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The detail of check items.
   */
  checkDetails?: ListCheckTypesResponseBodyDataCheckDetails[];
  /**
   * @remarks
   * The type of the check item.
   * 
   * @example
   * data_integrity
   */
  checkType?: string;
  /**
   * @remarks
   * The display name of the check item type.
   * 
   * @example
   * Data Integrity
   */
  checkTypeDisName?: string;
  static names(): { [key: string]: string } {
    return {
      checkDetails: 'CheckDetails',
      checkType: 'CheckType',
      checkTypeDisName: 'CheckTypeDisName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDetails: { 'type': 'array', 'itemType': ListCheckTypesResponseBodyDataCheckDetails },
      checkType: 'string',
      checkTypeDisName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkDetails)) {
      $dara.Model.validateArray(this.checkDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListCheckTypesResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53C0D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
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
      count: 'number',
      data: { 'type': 'array', 'itemType': ListCheckTypesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

