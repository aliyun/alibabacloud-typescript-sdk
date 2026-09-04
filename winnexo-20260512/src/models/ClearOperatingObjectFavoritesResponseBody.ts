// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearOperatingObjectFavoritesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. SUCCESS indicates success. In case of failure, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The graph name. You can call listGraphs to obtain the value.
   * 
   * @example
   * crm
   */
  graphName?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The object type, such as customer. This parameter has a value when type is set to mention.
   * 
   * @example
   * contract
   */
  objectType?: string;
  /**
   * @remarks
   * The digital employee name (operating object name, optional).
   * 
   * @example
   * customer_assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The number of remaining followed objects within the specified scope.
   * 
   * @example
   * 0
   */
  remainingCount?: number;
  /**
   * @remarks
   * The number of physical follow records that were actually deleted.
   * 
   * @example
   * 2
   */
  removedCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the remaining record count has been verified as zero within the same transaction.
   * 
   * @example
   * true
   */
  verified?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      graphName: 'graphName',
      message: 'message',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      remainingCount: 'remainingCount',
      removedCount: 'removedCount',
      requestId: 'requestId',
      verified: 'verified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      graphName: 'string',
      message: 'string',
      objectType: 'string',
      operatingObjectName: 'string',
      remainingCount: 'number',
      removedCount: 'number',
      requestId: 'string',
      verified: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

