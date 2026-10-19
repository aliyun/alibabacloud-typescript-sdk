// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRiskLevelsResponseBodyRiskLevelList extends $dara.Model {
  /**
   * @remarks
   * The description of the sensitivity level.
   * 
   * @example
   * Personal information data
   */
  description?: string;
  /**
   * @remarks
   * The ID of the sensitivity level.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the sensitivity level.
   * 
   * @example
   * S2
   */
  name?: string;
  /**
   * @remarks
   * The number of references to the sensitivity level.
   * 
   * @example
   * 10
   */
  referenceNum?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      referenceNum: 'ReferenceNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
      referenceNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRiskLevelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can use this ID to locate the API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of sensitivity levels.
   */
  riskLevelList?: ListRiskLevelsResponseBodyRiskLevelList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskLevelList: 'RiskLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskLevelList: { 'type': 'array', 'itemType': ListRiskLevelsResponseBodyRiskLevelList },
    };
  }

  validate() {
    if(Array.isArray(this.riskLevelList)) {
      $dara.Model.validateArray(this.riskLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

