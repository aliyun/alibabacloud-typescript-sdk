// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAIDBClusterTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * pm-2ze9***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The instance ID of the PolarDB database for the AI model service.
   * 
   * @example
   * pc-bp10ze***
   */
  relativeDBClusterId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
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

