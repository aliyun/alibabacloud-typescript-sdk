// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUmodelResponseBodyCommonSchemaRef } from "./GetUmodelResponseBodyCommonSchemaRef";


export class GetUmodelResponseBody extends $dara.Model {
  commonSchemaRef?: GetUmodelResponseBodyCommonSchemaRef[];
  /**
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @example
   * 123-123123-sdf-435-3123
   */
  requestId?: string;
  /**
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      commonSchemaRef: 'commonSchemaRef',
      description: 'description',
      regionId: 'regionId',
      requestId: 'requestId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonSchemaRef: { 'type': 'array', 'itemType': GetUmodelResponseBodyCommonSchemaRef },
      description: 'string',
      regionId: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commonSchemaRef)) {
      $dara.Model.validateArray(this.commonSchemaRef);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

