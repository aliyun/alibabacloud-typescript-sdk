// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSceneDefenseObjectsResponseBodyObjects } from "./DescribeSceneDefenseObjectsResponseBodyObjects";


export class DescribeSceneDefenseObjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the protected assets.
   */
  objects?: DescribeSceneDefenseObjectsResponseBodyObjects[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE07E73F-F19E-4A51-B62F-AC59E3B962D8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      objects: 'Objects',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objects: { 'type': 'array', 'itemType': DescribeSceneDefenseObjectsResponseBodyObjects },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

