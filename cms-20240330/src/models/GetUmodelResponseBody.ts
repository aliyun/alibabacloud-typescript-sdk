// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUmodelResponseBodyCommonSchemaRef extends $dara.Model {
  /**
   * @remarks
   * Common Umodel Schema group
   * 
   * @example
   * test-job-123123
   */
  group?: string;
  /**
   * @remarks
   * Version
   * 
   * @example
   * 5
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUmodelResponseBody extends $dara.Model {
  /**
   * @remarks
   * This field does not need to be filled currently
   */
  commonSchemaRef?: GetUmodelResponseBodyCommonSchemaRef[];
  /**
   * @remarks
   * Umodel description
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * Region
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 123-123123-sdf-435-3123
   */
  requestId?: string;
  /**
   * @remarks
   * Workspace name
   * 
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

