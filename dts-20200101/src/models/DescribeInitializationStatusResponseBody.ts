// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInitializationStatusResponseBodyDataInitializationDetails } from "./DescribeInitializationStatusResponseBodyDataInitializationDetails";
import { DescribeInitializationStatusResponseBodyDataSynchronizationDetails } from "./DescribeInitializationStatusResponseBodyDataSynchronizationDetails";
import { DescribeInitializationStatusResponseBodyStructureInitializationDetails } from "./DescribeInitializationStatusResponseBodyStructureInitializationDetails";


export class DescribeInitializationStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of initial full data synchronization.
   */
  dataInitializationDetails?: DescribeInitializationStatusResponseBodyDataInitializationDetails[];
  /**
   * @remarks
   * The details of incremental data synchronization.
   * 
   * >  This parameter and the parameters it contains will be removed in the future.
   */
  dataSynchronizationDetails?: DescribeInitializationStatusResponseBodyDataSynchronizationDetails[];
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 150DECD9-13FF-4929-A5DE-855BE9CC****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of initial schema synchronization.
   */
  structureInitializationDetails?: DescribeInitializationStatusResponseBodyStructureInitializationDetails[];
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      dataInitializationDetails: 'DataInitializationDetails',
      dataSynchronizationDetails: 'DataSynchronizationDetails',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      structureInitializationDetails: 'StructureInitializationDetails',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyDataInitializationDetails },
      dataSynchronizationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyDataSynchronizationDetails },
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      structureInitializationDetails: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyStructureInitializationDetails },
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataInitializationDetails)) {
      $dara.Model.validateArray(this.dataInitializationDetails);
    }
    if(Array.isArray(this.dataSynchronizationDetails)) {
      $dara.Model.validateArray(this.dataSynchronizationDetails);
    }
    if(Array.isArray(this.structureInitializationDetails)) {
      $dara.Model.validateArray(this.structureInitializationDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

