// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAIDBClusterDatasetServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the dataset management service.
   * 
   * @example
   * pcs-2ze26***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C890995A-CF06-4F4D-8DB8-DD26C2******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

