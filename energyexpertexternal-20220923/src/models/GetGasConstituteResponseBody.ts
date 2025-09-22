// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGasConstituteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 3.14
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * Gas emissions
   * 
   * @example
   * 3.14
   */
  gasEmissionData?: number;
  /**
   * @remarks
   * Name of gas
   * 
   * @example
   * CO₂
   */
  name?: string;
  /**
   * @remarks
   * Proportion of carbon emissions. Example value: 0.5 (50%)
   * 
   * @example
   * 0.5
   */
  ratio?: number;
  /**
   * @remarks
   * Gas Type
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      gasEmissionData: 'gasEmissionData',
      name: 'name',
      ratio: 'ratio',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      gasEmissionData: 'number',
      name: 'string',
      ratio: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGasConstituteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetGasConstituteResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
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
      data: { 'type': 'array', 'itemType': GetGasConstituteResponseBodyData },
      requestId: 'string',
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

