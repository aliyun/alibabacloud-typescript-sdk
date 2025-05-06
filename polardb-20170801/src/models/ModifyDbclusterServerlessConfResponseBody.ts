// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterServerlessConfResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the serverless cluster.
   * 
   * @example
   * pc-bp10gr51qasnl****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5E71541A-6007-4DCC-A38A-F872C31FEB45
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

