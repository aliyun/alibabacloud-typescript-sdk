// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertStrategyResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * {
   *             "uid": "uid-1",
   *             "name": "test-name",
   *             "strategy": {
   *                 "clusters": ["test-cluster-1","test-cluster-2"],
   *                 "items": ["test-item1","test-item2"]
   *             },
   *             "enabled": True,
   *           
   *         }
   */
  data?: any;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
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

