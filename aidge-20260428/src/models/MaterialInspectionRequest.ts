// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaterialInspectionRequest extends $dara.Model {
  /**
   * @remarks
   * apiId
   * 
   * @example
   * fb0012f49b004f889207a3c5e6ef8da9
   */
  apiId?: string;
  /**
   * @remarks
   * The URL of the reference image. Optional. When this parameter is not empty, the system performs multi-image differential comparison.
   * 
   * @example
   * https://example.com/reference.jpg
   */
  imageRefer?: string;
  /**
   * @remarks
   * The URL of the target image to be inspected.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/store.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The business request identity. Optional. This value is returned as-is in the response for Tracing Analysis purposes.
   * 
   * @example
   * req-2026-06-04-001
   */
  reqId?: string;
  /**
   * @remarks
   * The rule prompt in natural language that describes the inspection criteria.
   * 
   * @example
   * The door-shaped display stand must be placed in the entrance area; the functional display card must be placed on the counter surface
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      imageRefer: 'ImageRefer',
      imageUrl: 'ImageUrl',
      reqId: 'ReqId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      imageRefer: 'string',
      imageUrl: 'string',
      reqId: 'string',
      rules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

