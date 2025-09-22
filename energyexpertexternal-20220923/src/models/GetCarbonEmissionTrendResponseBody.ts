// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems extends $dara.Model {
  /**
   * @remarks
   * Carbon emissions.
   * 
   * @example
   * 20.22
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The month.
   * 
   * @example
   * 11
   */
  month?: number;
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      month: 'month',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      month: 'number',
      year: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBodyDataActualEmissionList extends $dara.Model {
  /**
   * @remarks
   * Data item list.
   */
  items?: GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems[];
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
  year?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataActualEmissionListItems },
      year: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems extends $dara.Model {
  /**
   * @remarks
   * Carbon emissions.
   * 
   * @example
   * 20.22
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * The month.
   * 
   * @example
   * 10
   */
  month?: number;
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
  year?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      month: 'month',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      month: 'number',
      year: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBodyDataTargetEmissionList extends $dara.Model {
  /**
   * @remarks
   * Data item list.
   */
  items?: GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems[];
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
  year?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataTargetEmissionListItems },
      year: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Actual emission list.
   */
  actualEmissionList?: GetCarbonEmissionTrendResponseBodyDataActualEmissionList[];
  /**
   * @remarks
   * Target Emission List.
   */
  targetEmissionList?: GetCarbonEmissionTrendResponseBodyDataTargetEmissionList[];
  static names(): { [key: string]: string } {
    return {
      actualEmissionList: 'actualEmissionList',
      targetEmissionList: 'targetEmissionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEmissionList: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataActualEmissionList },
      targetEmissionList: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataTargetEmissionList },
    };
  }

  validate() {
    if(Array.isArray(this.actualEmissionList)) {
      $dara.Model.validateArray(this.actualEmissionList);
    }
    if(Array.isArray(this.targetEmissionList)) {
      $dara.Model.validateArray(this.targetEmissionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCarbonEmissionTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetCarbonEmissionTrendResponseBodyData;
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * 9bc20a5a-b26b-4c28-922a-7cd10b61f96f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCarbonEmissionTrendResponseBodyData,
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

