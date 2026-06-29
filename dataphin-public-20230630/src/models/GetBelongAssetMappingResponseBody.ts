// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBelongAssetMappingResponseBodyMappingRelationList extends $dara.Model {
  /**
   * @remarks
   * The type of the asset. Valid values: COLUMN (field) and INDEX (metric).
   * 
   * @example
   * COLUMN
   */
  assetType?: string;
  /**
   * @remarks
   * The GUID of the asset.
   * 
   * @example
   * 1122
   */
  guid?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The code of the standard.
   * 
   * @example
   * cc
   */
  standardCode?: string;
  /**
   * @remarks
   * The ID of the standard.
   * 
   * @example
   * 1
   */
  standardId?: number;
  /**
   * @remarks
   * The name of the standard.
   * 
   * @example
   * test
   */
  standardName?: string;
  /**
   * @remarks
   * The directory where the standard set is located.
   * 
   * @example
   * /dir1
   */
  standardSetDirectory?: string;
  /**
   * @remarks
   * The ID of the standard set.
   * 
   * @example
   * 2
   */
  standardSetId?: number;
  /**
   * @remarks
   * The name of the standard set.
   * 
   * @example
   * test
   */
  standardSetName?: string;
  /**
   * @remarks
   * The stage of the standard.
   * 
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

export class GetBelongAssetMappingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of mapping relationships.
   */
  mappingRelationList?: GetBelongAssetMappingResponseBodyMappingRelationList[];
  /**
   * @remarks
   * The details of the backend response exception.
   * 
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
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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
      mappingRelationList: { 'type': 'array', 'itemType': GetBelongAssetMappingResponseBodyMappingRelationList },
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

