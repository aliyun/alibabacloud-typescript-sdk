// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckStandardResponseBodyStandardsRequirements extends $dara.Model {
  /**
   * @remarks
   * The ID of the requirement.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The number of check items in the requirement.
   * 
   * @example
   * 10
   */
  riskCheckCount?: number;
  /**
   * @remarks
   * The display name of the search condition.
   * 
   * @example
   * RAM identity authentication
   */
  showName?: string;
  /**
   * @remarks
   * The priority for display.
   * 
   * @example
   * 1
   */
  showPriorityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      riskCheckCount: 'RiskCheckCount',
      showName: 'ShowName',
      showPriorityLevel: 'ShowPriorityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      riskCheckCount: 'number',
      showName: 'string',
      showPriorityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckStandardResponseBodyStandards extends $dara.Model {
  /**
   * @remarks
   * The cloud service provider that uses the standard. Valid values:
   * 
   * *   **0**: Alibaba Cloud.
   * *   **3**: Tencent Cloud.
   * *   **4**: Huawei Cloud.
   * *   **5**: Microsoft Azure.
   * *   **7**: AWS.
   * 
   * @example
   * 3
   */
  bindVendor?: number;
  /**
   * @remarks
   * The ID of the standard.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The requirements.
   */
  requirements?: ListCheckStandardResponseBodyStandardsRequirements[];
  /**
   * @remarks
   * The display name of the check item.
   * 
   * @example
   * Identity and permission management
   */
  showName?: string;
  /**
   * @remarks
   * The priority for display.
   * 
   * @example
   * 1
   */
  showPriorityLevel?: number;
  /**
   * @remarks
   * The type of the standard.
   * 
   * @example
   * IDENTITY_PERMISSION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindVendor: 'BindVendor',
      id: 'Id',
      requirements: 'Requirements',
      showName: 'ShowName',
      showPriorityLevel: 'ShowPriorityLevel',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVendor: 'number',
      id: 'number',
      requirements: { 'type': 'array', 'itemType': ListCheckStandardResponseBodyStandardsRequirements },
      showName: 'string',
      showPriorityLevel: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.requirements)) {
      $dara.Model.validateArray(this.requirements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckStandardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * FA91FBDA-***
   */
  requestId?: string;
  /**
   * @remarks
   * The standards.
   */
  standards?: ListCheckStandardResponseBodyStandards[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      standards: 'Standards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      standards: { 'type': 'array', 'itemType': ListCheckStandardResponseBodyStandards },
    };
  }

  validate() {
    if(Array.isArray(this.standards)) {
      $dara.Model.validateArray(this.standards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

