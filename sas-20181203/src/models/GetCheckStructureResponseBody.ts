// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckStructureResponseBodyCheckStructureResponseStandardsRequirementsSections extends $dara.Model {
  /**
   * @remarks
   * The ID of the section for the check item.
   * 
   * @example
   * 177
   */
  id?: number;
  /**
   * @remarks
   * The display name of the section for the check item.
   * 
   * @example
   * Access Control
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      showName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckStructureResponseBodyCheckStructureResponseStandardsRequirements extends $dara.Model {
  /**
   * @remarks
   * The ID of the requirement item for the check item.
   * 
   * @example
   * 46
   */
  id?: number;
  /**
   * @remarks
   * The information about the sections of check items.
   */
  sections?: GetCheckStructureResponseBodyCheckStructureResponseStandardsRequirementsSections[];
  /**
   * @remarks
   * The display name of the requirement item for the check item.
   * 
   * @example
   * Networking
   */
  showName?: string;
  /**
   * @remarks
   * The total number of check items for the requirement.
   * 
   * @example
   * 36
   */
  totalCheckCount?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      sections: 'Sections',
      showName: 'ShowName',
      totalCheckCount: 'TotalCheckCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      sections: { 'type': 'array', 'itemType': GetCheckStructureResponseBodyCheckStructureResponseStandardsRequirementsSections },
      showName: 'string',
      totalCheckCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sections)) {
      $dara.Model.validateArray(this.sections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckStructureResponseBodyCheckStructureResponseStandards extends $dara.Model {
  /**
   * @remarks
   * The standard ID of the check item.
   * 
   * @example
   * 8
   */
  id?: number;
  /**
   * @remarks
   * The standards of the check items.
   */
  requirements?: GetCheckStructureResponseBodyCheckStructureResponseStandardsRequirements[];
  /**
   * @remarks
   * The display name of the standard for the check item.
   * 
   * @example
   * Alibaba Cloud best security practices
   */
  showName?: string;
  /**
   * @remarks
   * The standard type of the check item. Valid values:
   * 
   * *   RISK: security risk.
   * *   IDENTITY_PERMISSION: CIEM.
   * *   COMPLIANCE: security compliance.
   * 
   * @example
   * IDENTITY_PERMISSION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requirements: 'Requirements',
      showName: 'ShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requirements: { 'type': 'array', 'itemType': GetCheckStructureResponseBodyCheckStructureResponseStandardsRequirements },
      showName: 'string',
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

export class GetCheckStructureResponseBodyCheckStructureResponse extends $dara.Model {
  /**
   * @remarks
   * The type of the check item.
   * 
   * *   RISK: security risk.
   * *   IDENTITY_PERMISSION: Cloud Infrastructure Entitlement Management (CIEM).
   * *   COMPLIANCE: security compliance.
   * 
   * @example
   * RISK
   */
  standardType?: string;
  /**
   * @remarks
   * The structure information about the check items of the business type.
   */
  standards?: GetCheckStructureResponseBodyCheckStructureResponseStandards[];
  static names(): { [key: string]: string } {
    return {
      standardType: 'StandardType',
      standards: 'Standards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardType: 'string',
      standards: { 'type': 'array', 'itemType': GetCheckStructureResponseBodyCheckStructureResponseStandards },
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

export class GetCheckStructureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The structure information about check items provided by the configuration assessment feature.
   */
  checkStructureResponse?: GetCheckStructureResponseBodyCheckStructureResponse[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 379a9b8f-107b-4630-9e95-2299a1ea****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkStructureResponse: 'CheckStructureResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStructureResponse: { 'type': 'array', 'itemType': GetCheckStructureResponseBodyCheckStructureResponse },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkStructureResponse)) {
      $dara.Model.validateArray(this.checkStructureResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

