// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBusinessLocationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Chinese name of the region.
   * 
   * @example
   * China (Shanghai)
   */
  cnName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * China (Shanghai)
   */
  description?: string;
  /**
   * @remarks
   * The Chinese name of the district.
   * 
   * @example
   * Asia Pacific
   */
  districtCnName?: string;
  /**
   * @remarks
   * The English name of the district.
   * 
   * @example
   * Asia Pacific
   */
  districtEnName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * asia-pacific
   */
  districtId?: string;
  /**
   * @remarks
   * The ordering information of the district.
   * 
   * @example
   * 101
   */
  districtOrdering?: number;
  /**
   * @remarks
   * The display name of the district.
   * 
   * @example
   * Asia Pacific
   */
  districtShowName?: string;
  /**
   * @remarks
   * The complete description of the region.
   * 
   * @example
   * China East 2 (Shanghai)
   */
  enDescription?: string;
  /**
   * @remarks
   * The English name of the region.
   * 
   * @example
   * China (Shanghai)
   */
  enName?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * cn-shanghai
   */
  name?: string;
  /**
   * @remarks
   * The ordering information.
   * 
   * @example
   * 6
   */
  ordering?: number;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * China (Shanghai)
   */
  showName?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * region
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      description: 'Description',
      districtCnName: 'DistrictCnName',
      districtEnName: 'DistrictEnName',
      districtId: 'DistrictId',
      districtOrdering: 'DistrictOrdering',
      districtShowName: 'DistrictShowName',
      enDescription: 'EnDescription',
      enName: 'EnName',
      name: 'Name',
      ordering: 'Ordering',
      showName: 'ShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      description: 'string',
      districtCnName: 'string',
      districtEnName: 'string',
      districtId: 'string',
      districtOrdering: 'number',
      districtShowName: 'string',
      enDescription: 'string',
      enName: 'string',
      name: 'string',
      ordering: 'number',
      showName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessLocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: QueryBusinessLocationsResponseBodyData[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The parameter is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3369AD10-F1A6-4E6F-B99E-20F51826****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryBusinessLocationsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

