// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetMappingRelationsResponseBodyMappingRelationList extends $dara.Model {
  /**
   * @example
   * COLUMN
   */
  assetType?: string;
  /**
   * @example
   * 1122
   */
  guid?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * cc
   */
  standardCode?: string;
  /**
   * @example
   * 1
   */
  standardId?: number;
  /**
   * @example
   * test
   */
  standardName?: string;
  /**
   * @example
   * /dir1
   */
  standardSetDirectory?: string;
  /**
   * @example
   * 2
   */
  standardSetId?: number;
  /**
   * @example
   * test
   */
  standardSetName?: string;
  /**
   * @example
   * PROD
   */
  standardStage?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      guid: 'Guid',
      modifyTime: 'ModifyTime',
      name: 'Name',
      standardCode: 'StandardCode',
      standardId: 'StandardId',
      standardName: 'StandardName',
      standardSetDirectory: 'StandardSetDirectory',
      standardSetId: 'StandardSetId',
      standardSetName: 'StandardSetName',
      standardStage: 'StandardStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      guid: 'string',
      modifyTime: 'string',
      name: 'string',
      standardCode: 'string',
      standardId: 'number',
      standardName: 'string',
      standardSetDirectory: 'string',
      standardSetId: 'number',
      standardSetName: 'string',
      standardStage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetMappingRelationsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  mappingRelationList?: GetAssetMappingRelationsResponseBodyMappingRelationList[];
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      mappingRelationList: 'MappingRelationList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      mappingRelationList: { 'type': 'array', 'itemType': GetAssetMappingRelationsResponseBodyMappingRelationList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.mappingRelationList)) {
      $dara.Model.validateArray(this.mappingRelationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

