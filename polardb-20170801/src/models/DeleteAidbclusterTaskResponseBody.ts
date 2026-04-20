// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIDBClusterTaskResponseBody extends $dara.Model {
  /**
   * @example
   * pm-2ze9***
   */
  DBClusterId?: string;
  /**
   * @example
   * pc-2zejpr***
   */
  relativeDBClusterId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      relativeDBClusterId: 'RelativeDBClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      relativeDBClusterId: 'string',
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

