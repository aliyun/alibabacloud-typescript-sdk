// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryResponseBody extends $dara.Model {
  description?: string;
  /**
   * @example
   * 6bff4f317a14442fbc9f73d29dbd5fc3
   */
  memoryId?: string;
  /**
   * @example
   * 6a71f2d9-f1c9-913b-818b-114029103cad
   */
  requestId?: string;
  /**
   * @example
   * llm-us9hjmt32nysdm5v
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      memoryId: 'memoryId',
      requestId: 'requestId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      memoryId: 'string',
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

