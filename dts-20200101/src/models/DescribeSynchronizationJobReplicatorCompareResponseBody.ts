// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationJobReplicatorCompareResponseBody extends $dara.Model {
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
   * E6EB407F-C59F-4682-A682-A00FA6A2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * Indicates whether image matching is enabled. Valid values:
   * 
   * *   **true**: Image matching is enabled.
   * *   **false**: Image matching is disabled.
   * 
   * @example
   * true
   */
  synchronizationReplicatorCompareEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
      synchronizationReplicatorCompareEnable: 'SynchronizationReplicatorCompareEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
      synchronizationReplicatorCompareEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

